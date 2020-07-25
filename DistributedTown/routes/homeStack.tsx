import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Homepage from '../src/homepage/homepage';
import Avatar from '../src/avatar/avatar';
import Geolocation from '../src/geolocation/geolocation';

const screens = {
  Home: {
    screen: Homepage,
  },
  Avatar: {
    screen: Avatar,
  },
  Geolocation: {
    screen: Geolocation,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
