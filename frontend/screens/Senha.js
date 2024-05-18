import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import Navbar from '../components/Navbar';
import { styles } from '../styles/telas/senhaStyles';

export default function Senha() {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [tokenRecuperacao, setTokenRecuperacao] = useState('');

    const solicitarRedefinicaoSenha = () => {
        fetch('https://048ed71d-0b9a-4df7-a77e-690e34981c6b-00-rcgu688ubyui.janeway.replit.dev/solicitar-reset-senha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.resetToken) {
                setTokenRecuperacao(data.resetToken);
                Alert.alert('Sucesso', 'Token de recuperação gerado. Use o token para redefinir sua senha.');
            } else {
                Alert.alert('Erro', data.message);
            }
        })
        .catch(error => {
            Alert.alert('Erro', 'Erro ao solicitar recuperação de senha.');
        });
    };

    const redefinirSenha = () => {
        fetch('https://048ed71d-0b9a-4df7-a77e-690e34981c6b-00-rcgu688ubyui.janeway.replit.dev/resetar-senha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: tokenRecuperacao, newPassword: novaSenha }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Senha redefinida com sucesso') {
                Alert.alert('Sucesso', data.message);
            } else {
                Alert.alert('Erro', data.message);
            }
        })
        .catch(error => {
            Alert.alert('Erro', 'Erro ao redefinir a senha.');
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Navbar logoSource={require('../assets/logos/Logo-LeadTech.png')} />
            <View style={styles.container}>
                <Text style={styles.title}>Recuperação de Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Button color={'black'} title="Solicitar Recuperação de Senha" onPress={solicitarRedefinicaoSenha} />
                <TextInput
                    style={styles.input}
                    placeholder="Digite a nova senha"
                    value={novaSenha}
                    onChangeText={setNovaSenha}
                    secureTextEntry
                />
                <Button color={'black'} title="Redefinir Senha" onPress={redefinirSenha} />
            </View>
        </View>
    );
};

