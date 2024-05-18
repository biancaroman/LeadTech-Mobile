import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/inicioStyles';
import imagem from '../assets/imagemInicio.png'

export default function Inicio() {
  const navigation = useNavigation();

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
};

  return (
      <View style={{ flex: 1 }}>
        <Navbar logoSource={require('../assets/logos/Logo-LeadTech.png')} />
        <View style={styles.container}>
          <View style={styles.primeiroContainer}>
            <Text style={styles.title}>
              Inovação e excelência, impulsionando o sucesso operacional e a lucratividade de nossos clientes
            </Text>
            <Image style={styles.image} source={imagem}/>
          </View>
          <View>
            <Text style={styles.primeiroTexto}>Na LeadTech, estamos dedicados a desenvolver soluções inovadoras como a Conversão Inteligente, que redefine o marketing empresarial e eleva nossos clientes a um novo patamar de sucesso.</Text>
            <Text style={styles.title}>Conversão Inteligente</Text>
            <Text style={styles.primeiroTexto}>Conheça a revolução do marketing empresarial com a Conversão Inteligente, nossa plataforma utiliza inteligência artificial para oferecer insights precisos, automação de tarefas e estratégias personalizadas, elevando o desempenho e a eficiência das campanhas de marketing.</Text>
            <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.button}>
              <Text onPress={handleCadastro} style={styles.buttonText}>Começar</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}