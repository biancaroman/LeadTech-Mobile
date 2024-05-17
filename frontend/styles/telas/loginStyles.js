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
      flex: 0.4,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingHorizontal: 50,
    },
    title: {
      fontSize: 34,
      fontWeight: '900',
      color: 'white',
      marginBottom: 40,

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
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 5,
    },
    loginButton: {
      backgroundColor: 'black',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    loginButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 30,
    },
    checkbox: {
      color: 'white',
      fontSize: 20, 
    },
    link: {
      color: 'white',
      fontSize: 18
    },
    signupLink: {
      marginTop: 20,
    },
    signupText: {
      color: 'white',
      textDecorationLine: 'underline',
      fontSize: 18,
    }
    });
    