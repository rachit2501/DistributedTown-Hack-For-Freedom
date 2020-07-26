import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    top: -300,
  },
  viewPager: {
    flex: 2,
    left: Dimensions.get('screen').width / 4,
    top: -30,
    padding: 10,
  },
  viewarea: {
    top: '-28%',
    left: '20%',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: '-60%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '20%',
    left: '40%',
    top: '-5%',
  },
});

export default styles;
