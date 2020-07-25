import React, {PureComponent} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

export default class Homepage extends PureComponent {
  render() {
    return (
      <View style={styles['content-container']}>
        <View style={styles['_bg__homepage']}></View>
        <Image
          source={require('skins/polygon_1.png')}
          style={styles['polygon_1']}
        />
        <View style={styles['ellipse_1']}></View>
        <View style={styles['ellipse_2']}></View>

        <View style={styles['flat']}>
          <Image
            source={require('skins/path_1.png')}
            style={styles['path_1']}
          />

          <View style={styles['group_1']}>
            <Image
              source={require('skins/path_2.png')}
              style={styles['path_2']}
            />
            <Image
              source={require('skins/path_3.png')}
              style={styles['path_3']}
            />
            <Image
              source={require('skins/path_4.png')}
              style={styles['path_4']}
            />
            <Image
              source={require('skins/path_5.png')}
              style={styles['path_5']}
            />
          </View>
          <Image
            source={require('skins/path_6.png')}
            style={styles['path_6']}
          />
          <Image
            source={require('skins/path_7.png')}
            style={styles['path_7']}
          />
          <Image
            source={require('skins/path_9.png')}
            style={styles['path_9']}
          />
          <Image
            source={require('skins/path_10.png')}
            style={styles['path_10']}
          />
          <Image
            source={require('skins/path_11.png')}
            style={styles['path_11']}
          />
          <Image
            source={require('skins/path_12.png')}
            style={styles['path_12']}
          />
          <Image
            source={require('skins/path_13.png')}
            style={styles['path_13']}
          />
          <Image
            source={require('skins/path_14.png')}
            style={styles['path_14']}
          />
          <Image
            source={require('skins/path_15.png')}
            style={styles['path_15']}
          />
          <Image
            source={require('skins/path_16.png')}
            style={styles['path_16']}
          />
          <Image
            source={require('skins/path_17.png')}
            style={styles['path_17']}
          />
          <Image
            source={require('skins/path_18.png')}
            style={styles['path_18']}
          />
          <Image
            source={require('skins/path_19.png')}
            style={styles['path_19']}
          />
          <Image
            source={require('skins/path_20.png')}
            style={styles['path_20']}
          />
          <Image
            source={require('skins/path_21.png')}
            style={styles['path_21']}
          />
        </View>
        <View style={styles['distributed_town']}>Distributed Town</View>

        <View style={styles['group_1166']}>
          <View style={styles['don_t_have_an_account_']}>
            Don't have an account?
          </View>
          <a style={styles['sign_up__link']} href="2_1__avatar_nickname.html">
            <View style={styles['sign_up_']}>Sign Up!</View>
          </a>
        </View>

        <View style={styles['group_1164']}>
          <View style={styles['email_username_']}>
            Email/Username
            <br />
          </View>
          <View style={styles['rectangle_19']}></View>
          <View style={styles['password']}>Password</View>
          <View style={styles['forgot_password_']}>Forgot Password?</View>
          <View style={styles['rectangle_20']}></View>
          <View style={styles['rectangle_36']}></View>
        </View>

        <View style={styles['group_1165']}>
          <View style={styles['group_45']}>
            <View style={styles['bg']}></View>
            <View style={styles['login']}>Login</View>
          </View>
        </View>
      </View>
    );
  }
}
