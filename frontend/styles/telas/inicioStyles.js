import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    primeiroContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 16,
      position: 'relative',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 16, 
    },
    image: {
      width: '80%', 
      height: '115%',
      resizeMode: 'contain',
      position: 'absolute',
      right: -50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      width: '55%', 
      zIndex: 1,
      marginLeft: 20
    },
    primeiroTexto:{
      fontSize: 18, 
      padding: 25,
      marginBottom: 20
    },
    buttonContainer: {
      marginTop: 16,
      alignItems: 'center',
    },
    button: {
      width: '70%',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      backgroundColor: '#a4c1f8',
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});
