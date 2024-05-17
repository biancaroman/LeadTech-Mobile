import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40, 
      padding: 10,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    menuButton: {
      paddingHorizontal: 10,
    },
    logo: {
      width: 200,
      height: 100,
      marginLeft: 40

    },
    loginButton: {
      marginRight: 10,
      borderWidth: 2 ,
      width: 90, 
      height: 40, 
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 8
    },
    loginButtonText: {
      fontSize: 16,
      fontWeight: 'light',
      color: 'black',
    },

  menuModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuModal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  menuItem: {
    color: 'black', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  }
});
