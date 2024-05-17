import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faComment, faUser } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesomeIcon icon={faHome} size={28} color="lightgray" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesomeIcon icon={faSearch} size={28} color="lightgray" />
        <Text style={styles.menuText}>Busca</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesomeIcon icon={faComment} size={28} color="lightgray" />
        <Text style={styles.menuText}>Suporte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesomeIcon icon={faUser} size={28} color="lightgray" />
        <Text style={styles.menuText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#262250',
    paddingVertical: 30,
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    marginTop: 10,
    color: 'lightgray'
  },
});

export default Menu;
