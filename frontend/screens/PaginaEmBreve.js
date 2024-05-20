import React from 'react';
import { View, Text, Image} from 'react-native';
import Navbar from '../components/NavbarPrincipal';
import Menu from '../components/Menu';

const PaginaEmBreve = () => {
  return (
    <View style={{ flex: 1 }}>
    <Navbar logoSource={require('../assets/logos/Logo-ConversaoInteligente.png')} />
    <View style={styles.container}>
    <Image
        source={require('../assets/logos/Logo-LeadTech.png')} 
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Esta página estará disponível em breve!</Text>
      <Text style={styles.mensagem}>Nossa equipe está trabalhando duro para disponibilizar este recurso.</Text>
      <Text style={styles.mensagem}>Por favor, volte mais tarde para conferir.</Text>
    </View>
    <Menu/>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white' 
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  mensagem: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  imagem: {
    width: 300, 
    height: 300
  },
};

export default PaginaEmBreve;