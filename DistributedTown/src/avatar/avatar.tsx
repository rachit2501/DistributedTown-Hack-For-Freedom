import React, {useState} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from './styles';
import magic from '../magic';

interface Props {}

const Avatar: React.FunctionComponent<Props> = () => {
  const [value, onChangeText] = React.useState('');

  const onPress = async () => {
    // console.log('onPress');
    // if (value) {
    //   console.log(value);
    //   const auth = await magic.auth.loginWithMagicLink({email: value});
    //   console.log(auth);
    // }
  };
  return (
    <View style={styles['container']}>
      <View style={styles['bg___2_1__avatar_nickname']}></View>
      <View style={styles['group_1162']}>
        <View style={styles['ellipse_22']}></View>

        <View style={styles['user__1']}>
          <Image
            source={require('./skins/path_170.png')}
            style={styles['path_170']}
          />
          <Image
            source={require('./skins/path_171.png')}
            style={styles['path_171']}
          />
        </View>
      </View>
      <Image
        source={require('./skins/path_177.png')}
        style={styles['path_177']}
      />
      {/* <a style={styles['bg']} href="2_2_skills.html">
        <View style={styles['bg']}></View>
      </a> */}
      <View style={styles['next']}>
        <Text style={styles['nextText']} onPress={onPress}>
          Next
        </Text>
      </View>
      <View style={styles['nickname']}>
        <Text style={styles['nickname2']}>Nickname</Text>
      </View>
      <TextInput
        style={styles['rectangle_51']}
        onChangeText={(text) => onChangeText(text)}
        value={value}></TextInput>
      <View style={styles['pick_your_name']}>
        <Text style={styles['yellow']}>Pick your name!</Text>
      </View>
    </View>
  );
};

export default Avatar;
