import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Switch, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/loginStyles';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const navigation = useNavigation();

    const realizarLogin = async () => {
        try {
            const resposta = await fetch('https://048ed71d-0b9a-4df7-a77e-690e34981c6b-00-rcgu688ubyui.janeway.repl.co/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            const dados = await resposta.json();

            if (resposta.ok) {
                // Salvar o token em algum lugar seguro
                // Navegar para a tela principal
                navigation.navigate('Principal');
            } else {
                if (dados.mensagem === 'Usuário não encontrado') {
                    ToastAndroid.show('Usuário não cadastrado', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show(dados.mensagem, ToastAndroid.SHORT);
                }
            }
        } catch (error) {
            ToastAndroid.show('Erro ao realizar login', ToastAndroid.SHORT);
        }
    };

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    };

    const esqueceuSenha = () => {
        navigation.navigate('Senha');
    };

    const validarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            ToastAndroid.show('Por favor, insira um email válido.', ToastAndroid.SHORT);
            return;
        }
        if (!validarSenha(senha)) {
            ToastAndroid.show('A senha deve ter pelo menos 8 caracteres e conter pelo menos 1 número.', ToastAndroid.SHORT);
            return;
        }
        realizarLogin();
    };

    const validarSenha = (senha) => {
        const senhaRegex = /^(?=.*[0-9]).{8,}$/;
        return senhaRegex.test(senha);
    };

    return (
        <ImageBackground source={require('../assets/background/Fundo-Login.png')} style={styles.backgroundImage}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email ou número de telefone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={validarEmail}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Switch
                            value={lembrarSenha}
                            onValueChange={(novoValor) => setLembrarSenha(novoValor)}
                            style={styles.switch}
                        />
                        <Text style={styles.checkbox}>Lembrar senha</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={esqueceuSenha}>
                            <Text style={styles.link}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCadastro} style={styles.signupLink}>
                            <Text style={styles.signupText}>Não tem uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
