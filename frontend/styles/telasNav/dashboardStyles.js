import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A183F',
      alignItems: 'center'
    
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 13,
      color: 'white'
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        color: 'white'
      },
    chartTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 20,
      color: 'white'
    },
    tableTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
      color: 'white',
      marginLeft: 10
    },
    filterSection: {
      padding: 20,
    },
    filterTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
      },
      cellText: {
        fontSize: 14,
        color: 'white', 
      },
    chart: {
      width: 410,
      height: 220,
    },
  }
);