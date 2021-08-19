import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    height: Dimensions.get('screen').height / 7,
    width: Dimensions.get('screen').width - 30,
  },
  userImage: {
    transform: [{scale: 0.3}],
    borderRadius: 100,
    marginLeft: -Dimensions.get('screen').width / 10,
  },
});

export default style;
