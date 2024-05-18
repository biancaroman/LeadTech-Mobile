import  { React }  from 'react';
import { View, Text } from 'react-native';
import Navbar from '../../components/NavbarPrincipal';
import Menu from '../../components/Menu';

export default function Campanhas () {
    return(
        <View style={{ flex: 1 }}>
            <Navbar logoSource={require('../../assets/logos/Logo-ConversaoInteligente.png')} />
            <View>
                <Text>Tela de Campanhas</Text>
            </View>
            <Menu/>
        </View>
    );
};

