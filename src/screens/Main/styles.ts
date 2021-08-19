import { Dimensions, StyleSheet } from "react-native";

import color from "../../assets/color";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: Dimensions.get('screen').height / 10,
    width: Dimensions.get('screen').width,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },
  mainBlur: {
    flex: 1,
    backgroundColor: color.whiteBlur,
    alignItems: 'center',
    justifyContent: 'center',
  },
  openButton: {
    borderRadius: 10,
    backgroundColor: color.gradientDark,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    color: color.white,
  },
  modalView: {
    marginTop: Dimensions.get('screen').height / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: color.white,
    height: Dimensions.get('screen').height / 1.5,
    width: Dimensions.get('screen').width,
    left: -Dimensions.get('screen').width / 20,
  },
  buttonBox: {
    alignItems: 'center',
    paddingTop: 30,
  },
  gradiantButton: {
    width: Dimensions.get('screen').width / 1.5,
    height: Dimensions.get('screen').height / 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Dimensions.get('screen').height / 10,
  },
});

export default styles;
