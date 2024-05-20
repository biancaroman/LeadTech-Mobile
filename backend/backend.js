const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');

const app = express();
const porta = process.env.PORT || 3000;
const ARQUIVO_USUARIOS = './usuarios.json';
const ARQUIVO_RELATORIOS = './relatorios.json'; 
const CHAVE_JWT = 'sua_chave_secreta';
const CHAVE_RESET_TOKEN = 'sua_chave_secreta_de_recuperacao';

app.use(cors());
app.use(express.json());

const lerUsuarios = () => {
  if (!fs.existsSync(ARQUIVO_USUARIOS)) {
    return [];
  }
  const data = fs.readFileSync(ARQUIVO_USUARIOS);
  return JSON.parse(data);
};

const escreverUsuarios = (usuarios) => {
  fs.writeFileSync(ARQUIVO_USUARIOS, JSON.stringify(usuarios, null, 2));
};

const lerRelatorios = () => {
  if (!fs.existsSync(ARQUIVO_RELATORIOS)) {
    return [];
  }
  const data = fs.readFileSync(ARQUIVO_RELATORIOS);
  return JSON.parse(data);
};

const escreverRelatorios = (relatorios) => {
  fs.writeFileSync(ARQUIVO_RELATORIOS, JSON.stringify(relatorios, null, 2));
};

// Requisição para realizar o cadastro
app.post('/registrar', async (req, res) => {
  const { email, senha, telefone } = req.body;

  if (!email || !senha || !telefone) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos' });
  }

  const usuarios = lerUsuarios();
  const usuarioExistente = usuarios.find((usuario) => usuario.email === email);

  if (usuarioExistente) {
    return res.status(400).json({ mensagem: 'Email já cadastrado' });
  }

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoUsuario = { email, senha: senhaCriptografada, telefone };
    usuarios.push(novoUsuario);
    escreverUsuarios(usuarios);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário', error });
  }
});

// Requisição para realizar o login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos' });
  }

  const usuarios = lerUsuarios();
  const usuario = usuarios.find((usuario) => usuario.email === email);

  if (!usuario) {
    return res.status(400).json({ mensagem: 'Usuário não encontrado' });
  }

  const isMatch = await bcrypt.compare(senha, usuario.senha);

  if (!isMatch) {
    return res.status(400).json({ mensagem: 'Senha incorreta' });
  }

  const token = jwt.sign({ id: usuario.email }, CHAVE_JWT, { expiresIn: '1h' });
  res.status(200).json({ token });
});

app.get('/usuarios', (req, res) => {
  const usuarios = lerUsuarios();
  res.status(200).json(usuarios);
});

// Requisição para solicitar uma nova senha 
app.post('/solicitar-reset-senha', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ mensagem: 'Por favor, insira um endereço de e-mail válido.' });
  }

  const usuarios = lerUsuarios();
  const usuario = usuarios.find((usuario) => usuario.email === email);

  if (!usuario) {
    return res.status(400).json({ mensagem: 'Usuário não encontrado' });
  }

  const resetToken = jwt.sign({ email }, CHAVE_RESET_TOKEN, { expiresIn: '1h' });
  usuario.resetToken = resetToken;
  escreverUsuarios(usuarios);

  res.status(200).json({ mensagem: 'Token de recuperação gerado com sucesso', resetToken });
});

// Requisição para gerar uma nova senha 
app.post('/resetar-senha', (req, res) => {
  const { token, novaSenha } = req.body;

  if (!token || !novaSenha) {
    return res.status(400).json({ mensagem: 'Token e nova senha são obrigatórios' });
  }

  try {
    const decoded = jwt.verify(token, CHAVE_RESET_TOKEN);
    const usuarios = lerUsuarios();
    const usuario = usuarios.find((usuario) => usuario.email === decoded.email);

    if (!usuario || usuario.resetToken !== token) {
      return res.status(400).json({ mensagem: 'Token inválido ou expirado' });
    }

    usuario.senha = novaSenha; 
    delete usuario.resetToken;
    escreverUsuarios(usuarios);

    res.status(200).json({ mensagem: 'Senha redefinida com sucesso' });
  } catch (error) {
    res.status(400).json({ mensagem: 'Token inválido ou expirado', error });
  }
});

// Requisição para gerar relatório
app.post('/gerar-relatorio', (req, res) => {
  const { nome, metrica, filtro } = req.body;

  if (!nome || !metrica || !filtro) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }

  try {
    const novoRelatorio = { nome, metrica, filtro, desempenho: '85%', roi: '$1500' }; 
    const relatorios = lerRelatorios();
    relatorios.push(novoRelatorio);
    escreverRelatorios(relatorios);
    res.status(201).json(novoRelatorio);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao gerar relatório', error });
  }
});

// Requisição para obter relatórios gerados
app.get('/relatorios', (req, res) => {
  try {
    const relatorios = lerRelatorios();
    res.status(200).json(relatorios);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter relatórios', error });
  }
});

// Requisição para deletar relatório
app.delete('/relatorios/:nome', (req, res) => {
  const { nome } = req.params;

  try {
    let relatorios = lerRelatorios();
    const novoRelatorios = relatorios.filter(relatorio => relatorio.nome !== nome);

    if (relatorios.length === novoRelatorios.length) {
      return res.status(404).json({ mensagem: 'Relatório não encontrado' });
    }

    escreverRelatorios(novoRelatorios);
    res.status(200).json({ mensagem: 'Relatório deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar relatório', error });
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
