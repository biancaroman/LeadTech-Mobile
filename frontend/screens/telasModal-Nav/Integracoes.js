import  { React }  from 'react';
import { View, Text } from 'react-native';
import Navbar from '../../components/NavbarPrincipal';
import Menu from '../../components/Menu';

export default function Integracoes () {
    return(
        <View style={{ flex: 1 }}>
            <Navbar logoSource={require('../../assets/logos/Logo-ConversaoInteligente.png')} />
            <View>
                <Text>Tela de Integracoes</Text>
            </View>
            <Menu/>
        </View>
    );
};
