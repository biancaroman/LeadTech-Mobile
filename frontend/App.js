import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Principal from './screens/Principal';
import Inicio from './screens/Inicio'
import Entrada from './screens/Entrada';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrada">
        <Stack.Screen
          name="Entrada"
          component={Entrada}
          options={{ title: 'Entrada', headerShown: false }} 
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Inicio', headerShown: false  }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }} 
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro', headerShown: false }} 
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ title: 'Principal', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
