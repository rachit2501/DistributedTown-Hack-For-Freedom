import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from './styles';

export default function JSX() {
  return (
    <>
      <View style={styles['bg__homepage']}></View>
      {/* <Image
        source={require('./skins/polygon_1.png')}
        style={styles['polygon_1']}
      /> */}
      <View style={styles['ellipse_1']}></View>
      <View style={styles['ellipse_2']}></View>

      <View style={styles['flat']}>
        <Image
          source={require('./skins/path_1.png')}
          style={styles['path_1']}
        />

        <View style={styles['group_1']}>
          <Image
            source={require('./skins/path_2.png')}
            style={styles['path_2']}
          />
          <Image
            source={require('./skins/path_3.png')}
            style={styles['path_3']}
          />
          <Image
            source={require('./skins/path_4.png')}
            style={styles['path_4']}
          />
          <Image
            source={require('./skins/path_5.png')}
            style={styles['path_5']}
          />
        </View>
        <Image
          source={require('./skins/path_6.png')}
          style={styles['path_6']}
        />
        <Image
          source={require('./skins/path_7.png')}
          style={styles['path_7']}
        />
        <Image
          source={require('./skins/path_9.png')}
          style={styles['path_9']}
        />
        <Image
          source={require('./skins/path_10.png')}
          style={styles['path_10']}
        />
        <Image
          source={require('./skins/path_11.png')}
          style={styles['path_11']}
        />
        <Image
          source={require('./skins/path_12.png')}
          style={styles['path_12']}
        />
        <Image
          source={require('./skins/path_13.png')}
          style={styles['path_13']}
        />
        <Image
          source={require('./skins/path_14.png')}
          style={styles['path_14']}
        />
        <Image
          source={require('./skins/path_15.png')}
          style={styles['path_15']}
        />
        <Image
          source={require('./skins/path_16.png')}
          style={styles['path_16']}
        />
        <Image
          source={require('./skins/path_17.png')}
          style={styles['path_17']}
        />
        <Image
          source={require('./skins/path_18.png')}
          style={styles['path_18']}
        />
        <Image
          source={require('./skins/path_19.png')}
          style={styles['path_19']}
        />
        <Image
          source={require('./skins/path_20.png')}
          style={styles['path_20']}
        />
        <Image
          source={require('./skins/path_21.png')}
          style={styles['path_21']}
        />
      </View>
    </>
  );
}
