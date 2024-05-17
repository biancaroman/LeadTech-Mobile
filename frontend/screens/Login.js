import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import { styles } from '../styles/telas/loginStyles';
import { useState } from 'react';

export default function Login() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Principal');
    };

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
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
                        <TextInput style={styles.input} placeholder="Digite seu email" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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



