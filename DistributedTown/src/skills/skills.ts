import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    top: -300,
  },
  viewPager: {
    flex: 2,
    left: Dimensions.get('screen').width / 4 + 10,
    top: -30,
    padding: 10,
  },
  viewarea: {
    top: '-32%',
    left: '20%',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: '-67%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '20%',
    left: '40%',
    top: '-15%',
  },
});

export default styles;
