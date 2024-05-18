import React, { useState, useRef } from 'react';
import { View, Image, Pressable, Modal, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTimes, faChartLine, faClipboardList, faBullhorn, faPlug, faCog, faLightbulb, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones relevantes
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/navbar/navbarPrincipalStyles';
import logoModal from '../assets/logos/Logo-Modal.png';

const screenWidth = Dimensions.get('window').width;

const Navbar = ({ logoSource }) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current; // Initial position off-screen
  const [activeScreen, setActiveScreen] = useState('');

  const handleMenuPress = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
    setActiveScreen(screenName);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable style={styles.menuButton} onPress={handleMenuPress}>
          <FontAwesomeIcon icon={faBars} size={28} color="white" />
        </Pressable>
        <Image source={logoSource} style={styles.logo} />
        <TouchableOpacity style={styles.bellIcon} >
          <FontAwesomeIcon icon={faBell} size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={styles.menuModalBackground}>
          <Animated.View style={[styles.menuModal, { transform: [{ translateX: slideAnim }] }]}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <FontAwesomeIcon icon={faTimes} size={24} color="gray" />
            </TouchableOpacity>
            <Image source={logoModal} style={styles.logoModal} />
            <View style={styles.links}>
              <TouchableOpacity onPress={() => handleNavigation('Dashboard')}>
                <Text style={[styles.menuItem, activeScreen === 'Dashboard' ? styles.activeItem : null, activeScreen === 'Dashboard' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faChartLine} size={18} color={activeScreen === 'Dashboard' ? '#4c9ece' : '#595683'} /> {'  '} Dashboard
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Relatorios')}>
                <Text style={[styles.menuItem, activeScreen === 'Relatorios' ? styles.activeItem : null, activeScreen === 'Relatorios' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faClipboardList} size={18} color={activeScreen === 'Relatorios' ? '#4c9ece' : '#595683'} /> {'  '} Relatórios
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Campanhas')}>
                <Text style={[styles.menuItem, activeScreen === 'Campanhas' ? styles.activeItem : null, activeScreen === 'Campanhas' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faBullhorn} size={18} color={activeScreen === 'Campanhas' ? '#4c9ece' : '#595683'} /> {'  '} Campanhas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Integracoes')}>
                <Text style={[styles.menuItem, activeScreen === 'Integracoes' ? styles.activeItem : null, activeScreen === 'Integracoes' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faPlug} size={18} color={activeScreen === 'Integracoes' ? '#4c9ece' : '#595683'} /> {'  '} Integrações
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Automatizacoes')}>
                <Text style={[styles.menuItem, activeScreen === 'Automatizacoes' ? styles.activeItem : null, activeScreen === 'Automatizacoes' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faCog} size={18} color={activeScreen === 'Automatizacoes' ? '#4c9ece' : '#595683'} /> {'  '} Automatizações
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Recomendacoes')}>
                <Text style={[styles.menuItem, activeScreen === 'Recomendacoes' ? styles.activeItem : null, activeScreen === 'Recomendacoes' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faLightbulb} size={18} color={activeScreen === 'Recomendacoes' ? '#4c9ece' : '#595683'} /> {'  '} Recomendações
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.outrosLinks}>
              <TouchableOpacity onPress={() => handleNavigation('Configurações')}>
                <Text style={styles.linksDois}> Configurações</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Sobre')}>
                <Text style={styles.linksDois}> Sobre</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Ajuda')}>
                <Text style={styles.linksDois}> Ajuda</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleNavigation('Inicio')}>
              <Text style={styles.sairApp}>
                <FontAwesomeIcon icon={faSignOutAlt} size={20} color="white" /> {' '} Sair do APP
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default Navbar;
