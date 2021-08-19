import React from 'react';
import { Image, View } from 'react-native';

import Styles from './styles';

const Header: React.FC = () => {


  return (
    <View style={Styles.container}>
      <Image
        source={require('../../assets/images/user.jpg')}
        style={Styles.userImage}
        />
      <Image
        source={require('../../assets/images/chat_icon.png')}
      />
    </View>
  );
}

export default Header;
