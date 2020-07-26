import React, {PureComponent, useState, useEffect} from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import JSX from './jsx';

interface Props {
  navigation: any;
}

const Homepage: React.FunctionComponent<Props> = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles['content_container']}>
        <JSX />
        <View style={styles['distributed_town']}>
          <Text style={styles['dttext']}>Congrats!</Text>
        </View>
        <View style={styles['group_1166']}>
          <View style={styles['don_t_have_an_account']}>
            <Text>Don't have an account?</Text>
          </View>
        </View>

        <View style={styles['group_1164']}>
          <View style={styles['email_username']}>
            <Text style={styles['eu']}>
              {' '}
              You have just earned your first Credits.
            </Text>
          </View>
        </View>

        <View style={styles['group_1165']}>
          <View style={styles['group_45']}>
            <View style={styles['bg']}></View>
            <View style={styles['login']}>
              <Text onPress={pressHandler}>Start Contributing</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Congrats;
