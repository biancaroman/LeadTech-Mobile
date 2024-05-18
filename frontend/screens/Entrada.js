import  { React, useEffect }  from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/entradaStyles';

const Entrada = () => {

    const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Inicio'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

    return(
        <View style={styles.container}>
            <Image source={require('../assets/logos/Logo-LeadTech.png')} style={styles.image} />
        </View>
    );
};

export default Entrada;