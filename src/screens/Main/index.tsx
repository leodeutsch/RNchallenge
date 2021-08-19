import React, { useState } from 'react';
import {
  Image, Text, TouchableOpacity, View
} from 'react-native';
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';
import Calendar from '../../components/Calendar';
import Color from '../../assets/color';

import Styles from './styles';

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <View style={Styles.main}>
      <Header />
      <Image
        source={require('../../assets/images/ilustration_lifestyle.png')}
        style={Styles.image}
      />
      <View>
        <TouchableOpacity
         onPress={handleModal}
         style={Styles.openButton}
        >
          <Text style={Styles.buttonText}>Open Calendar</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalOpen}
        onSwipeComplete={() => setIsModalOpen(false)}
        swipeDirection="down"
        onBackButtonPress={() => setIsModalOpen(false)}
      >
        <View
          style={Styles.modalView}
          >
          <Calendar />
          <View style={Styles.buttonBox}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0.57}}
              colors={[Color.gradientDark, Color.gradientLight]}
              style={Styles.gradiantButton}
              >
              <TouchableOpacity onPress={handleModal}>
                <Text style={Styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Main;
