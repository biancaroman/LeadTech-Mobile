import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Principal from './screens/Principal';
import Inicio from './screens/Inicio'
import Entrada from './screens/Entrada';
import Dashboard from './screens/telasModal-Nav/Dashboard';
import Relatorios from './screens/telasModal-Nav/Relatorios';
import Senha from './screens/Senha';
import PaginaEmBreve from './screens/PaginaEmBreve';

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
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard', headerShown: false }} 
        />
        <Stack.Screen
          name="Relatorios"
          component={Relatorios}
          options={{ title: 'Relatorios', headerShown: false }} 
        />
        <Stack.Screen
          name="Senha"
          component={Senha}
          options={{ title: 'Senha', headerShown: false }} 
        />
        <Stack.Screen
          name="PaginaEmBreve"
          component={PaginaEmBreve}
          options={{ title: 'PaginaEmBreve', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
