import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Switch, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/loginStyles';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        // Aqui você pode realizar a lógica de login, como verificar o email/senha no banco de dados
        // Por enquanto, apenas navegar para a tela Principal
        navigation.navigate('Principal');
    };

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            ToastAndroid.show('Por favor, insira um email válido.', ToastAndroid.SHORT);
            return;
        }
        if (!validatePassword(password)) {
            ToastAndroid.show('A senha deve ter pelo menos 8 caracteres e conter pelo menos 1 número.', ToastAndroid.SHORT);
            return;
        }
        handleLogin();
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[0-9]).{8,}$/;
        return passwordRegex.test(password);
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
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={validateEmail}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={(newValue) => setIsSwitchOn(newValue)}
                            style={styles.switch}
                        />
                        <Text style={styles.checkbox}>Lembrar senha</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => Linking.openURL('https://exemplo.com')}>
                            <Text style={styles.link}>Precisa de ajuda?</Text>
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
