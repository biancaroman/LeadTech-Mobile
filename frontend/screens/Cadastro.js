import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/cadastroStyles';
import {Entypo} from '@expo/vector-icons';

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigation = useNavigation();

    const handleCadastro = () => {
        if (!validateEmail(email)) {
            ToastAndroid.show('Por favor, insira um email válido.', ToastAndroid.SHORT);
            return;
        }
        if (!validatePassword(password)) {
            ToastAndroid.show('A senha deve ter pelo menos 8 caracteres e conter pelo menos 1 número.', ToastAndroid.SHORT);
            return;
        }
        if (!validatePhone(phone)) {
            ToastAndroid.show('Por favor, insira um telefone no formato (DDD)XXXXX-XXXX.', ToastAndroid.SHORT);
            return;
        }
        navigation.navigate('Principal');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[0-9]).{8,}$/;
        return passwordRegex.test(password);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
        return phoneRegex.test(phone);
    };

    const formatPhone = (text) => {
        const cleaned = text.replace(/\D/g, '');
        let formatted = cleaned;

        if (cleaned.length > 2) {
            formatted = `(${cleaned.slice(0, 2)})${cleaned.slice(2)}`;
        }
        if (cleaned.length > 7) {
            formatted = `(${cleaned.slice(0, 2)})${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
        }
        setPhone(formatted);
    };


    return (
        <ImageBackground source={require('../assets/background/Fundo-Cadastro.png')} style={styles.backgroundImage}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Realizar Cadastro</Text>
                <Text style={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
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
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="(DDD)XXXXX-XXXX"
                            value={phone}
                            onChangeText={formatPhone}
                            keyboardType="phone-pad"
                            maxLength={14} 
                        />
                        <Text style={styles.texto}>Recomendamos fortemente adicionar um número de telefone. Isso ajudará a verificar sua conta e mantê-la segura. </Text>
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
                    <View style={styles.recomendacoes}>
                        <Entypo name="controller-record" size={14} color="white" />
                        <Text style={styles.marcadores}>Use 8 ou mais carácteres </Text>
                    </View>
                    <View style={styles.recomendacoes}>
                        <Entypo name="controller-record" size={14} color="white" />
                        <Text style={styles.marcadores}>Use um número (ex. 1234)</Text>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleCadastro}>
                        <Text style={styles.loginButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
        </ImageBackground>
    );
}


