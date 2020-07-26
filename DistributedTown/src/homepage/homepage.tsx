import React, {PureComponent, useState, useEffect} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from './styles';
// import magic from '../magic';
import JSX from './jsx';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const Homepage: React.FunctionComponent<Props> = ({navigation}) => {
  const [email, updateEmail] = useState('');

  const pressHandler = async () => {
    // const auth = await magic.auth.loginWithMagicLink({email});
    // if (auth)
    navigation.navigate('Avatar');
  };

  useEffect(() => {
    // magic.user
    //   .isLoggedIn()
    //   .then((res) => {
    //     if (res) navigation.navigate('Avatar');
    //   })
    //   .catch((e) => {
    //     // console.log(e);
    //   });
  }, []);

  return (
    <ScrollView>
      <View style={styles['content_container']}>
        <JSX />
        <View style={styles['distributed_town']}>
          <Text style={styles['dttext']}>Distributed Town</Text>
        </View>
        <View style={styles['group_1166']}>
          <View style={styles['don_t_have_an_account']}>
            <Text>Don't have an account?</Text>
          </View>
        </View>

        <View style={styles['group_1164']}>
          <View style={styles['email_username']}>
            <Text style={styles['eu']}> Email/Username</Text>
          </View>
          <TextInput
            style={styles['rectangle_19']}
            value={email}
            onChangeText={(e) => {
              updateEmail(e);
            }}></TextInput>
          {/* <View style={styles['password']}>
          <Text style={styles['eu']}>Password</Text>
        </View>
        <TextInput style={styles['rectangle_19']}></TextInput>
        <View style={styles['forgot_password']}>
          <Text style={styles['eu']}>Forgot Password?</Text>
        </View> */}
        </View>

        <View style={styles['group_1165']}>
          <View style={styles['group_45']}>
            <View style={styles['bg']}></View>
            <View style={styles['login']}>
              <Text onPress={pressHandler}>Login</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Homepage;
