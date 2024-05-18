import React from 'react';
import { View, Text} from 'react-native';
import Navbar from '../components/NavbarPrincipal';
import Menu from '../components/Menu';
import { styles } from '../styles/telas/principalStyles';

export default function Principal() {
  return (
      <View style={styles.container}>
        <Navbar logoSource={require('../assets/logos/Logo-ConversaoInteligente.png')} />
        <View>
          <Text>Tela Principal</Text>
        </View>
        <Menu/>
      </View>
  );
}