import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#1A183F',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 25,
  },
  logo: {
    width: 160,
    height: 45,
  },
  menuModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuModal: {
    backgroundColor: '#262250',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    height: '100%',
    width: '60%',
  },
  menuItem: {
    color: '#595683',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  logoModal:{
    marginTop: 60
  }, 
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  links: {
    marginTop: 50,
    alignItems: 'baseline'
  },
  outrosLinks: {
    marginTop: 50,

  }, 
  linksDois: {
    color: 'white',
    fontSize: 18, 
    marginTop: 10
  },
  sairApp: {
    color: 'white',
    fontSize: 18, 
    marginTop: 70
  },
  bellIcon: {
    position: 'absolute',
    right: 2,
  }
  
});
