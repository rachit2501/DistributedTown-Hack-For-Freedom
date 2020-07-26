import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Homepage from '../src/homepage/homepage';
import Avatar from '../src/avatar/avatar';
import Geolocation from '../src/geolocation/geolocation';
import Skills from '../src/skills/Skills';

const screens = {
  Skills: {
    screen: Skills,
  },
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
