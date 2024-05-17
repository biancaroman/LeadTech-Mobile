import React from 'react';
import { View, Text} from 'react-native';
import Navbar from '../components/Navbar';
import { styles } from '../styles/telas/inicioStyles';

export default function Inicio() {
  return (
      <View style={{ flex: 1 }}>
        <Navbar logoSource={require('../assets/logos/Logo-LeadTech.png')} />
        <View style={styles.container}>
          <Text style={styles.title}>Tela Inicio</Text>
        </View>
      </View>
  );
}