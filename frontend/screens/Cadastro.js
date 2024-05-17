import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/telas/cadastroStyles';
import {Entypo} from '@expo/vector-icons';

export default function Cadastro() {

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
                        <TextInput style={styles.input} placeholder="Digite seu email" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput style={styles.input} placeholder="Digite seu telefone" />
                        <Text style={styles.texto}>Recomendamos fortemente adicionar um número de telefone. Isso ajudará a verificar sua conta e mantê-la segura. </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
                    </View>
                    <View style={styles.recomendacoes}>
                        <Entypo name="controller-record" size={14} color="white" />
                        <Text style={styles.marcadores}>Use 8 ou mais carácteres </Text>
                    </View>
                    <View style={styles.recomendacoes}>
                        <Entypo name="controller-record" size={14} color="white" />
                        <Text style={styles.marcadores}>Use um número (ex. 1234)</Text>
                    </View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
        </ImageBackground>
    );
}


