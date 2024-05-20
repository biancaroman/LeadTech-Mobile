import React, { useState } from 'react';
import { View, Text, Image, Pressable, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/navbar/navbarStyles';

const Navbar = ({ logoSource, onMenuPress }) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleMenuPress = () => {
    setMenuVisible(!menuVisible);
  };

  const closeModal = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.menuButton} onPress={handleMenuPress}>
        <FontAwesomeIcon icon={faBars} size={24} color="black" />
      </Pressable>
      <Image source={logoSource} style={styles.logo} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {menuVisible && (
        <Pressable style={[styles.menuOverlay]} onPress={closeModal}>
          <Modal
            visible={menuVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setMenuVisible(false)}
          >
            <View style={styles.menuModalBackground}>
              <View style={styles.menuModal}>
                <TouchableOpacity onPress={closeModal}>
                  <FontAwesomeIcon icon={faTimes} size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Inicio');
                  setMenuVisible(false);
                }}>
                  <Text style={styles.menuItem}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Sobre Nós');
                  setMenuVisible(false);
                }}>
                  <Text style={styles.menuItem}>Sobre Nós</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Contato');
                  setMenuVisible(false);
                }}>
                  <Text style={styles.menuItem}>Contato</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </Pressable>
      )}
    </View>
  );
};

export default Navbar;
