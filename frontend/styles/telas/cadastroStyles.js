import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', 
      justifyContent: 'center',
    },
    
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    containerTitle: {
      flex: 0.25,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 50,
      marginBottom: 30,
    },
    title: {
      fontSize: 28,
      fontWeight: '900',
      color: 'white',
    },
    formContainer: {
      width: '85%',
    },
    inputContainer: {
      marginBottom: 40,
    },
    label: {
      color: 'white',
      fontSize: 20,
      marginBottom: 5,
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 15,
      borderRadius: 10,
    },
    loginButton: {
      backgroundColor: 'black',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    loginButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    marcadores: {
        color: 'white',
        fontSize: 18,
    },

    texto: {
      color: 'white',
      fontSize: 18,
      marginTop: 10
    },
    recomendacoes: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    }
    });
    