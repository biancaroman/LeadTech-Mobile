import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Navbar from '../components/NavbarPrincipal';
import Menu from '../components/Menu';
import { styles } from '../styles/telas/principalStyles';

export default function Principal() {
  return (
    <View style={styles.container}>
      <Navbar logoSource={require('../assets/logos/Logo-ConversaoInteligente.png')} />
      
      <ScrollView>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Bem-vindo à Conversão Inteligente</Text>
          <Text style={styles.bannerSubtitle}>Transformando suas operações de marketing {'\n'} com IA avançada</Text>
        </View>

        <View style={styles.presentation}>
          <Text style={styles.sectionTitle}>Sobre a Conversão Inteligente</Text>
          <Image 
            source={require('../assets/marketing.webp')}
            style={styles.presentationImage}
          />
          <Text style={styles.presentationText}>
            A Conversão Inteligente utiliza IA para transformar as operações de marketing das empresas de BPO e CPG.
          </Text>
          <Text style={styles.presentationText}>
            Reduza a rotatividade de clientes, diminua os custos e melhore o ROI das campanhas.
          </Text>
          <Text style={styles.presentationText}>
            Explore o menu para conhecer todas as funcionalidades e impulsionar o sucesso da sua empresa.
          </Text>
        </View>
      </ScrollView>
      <Menu />
    </View>
  );
}