import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text} from 'react-native';

export default function Home({
  gardening,
  setGardening,
  Cooking,
  setCooking,
  RH,
  setRH,
  Company,
  setCompany,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Gardening</Text>
        <CheckBox
          disabled={false}
          value={gardening}
          onValueChange={() =>
            gardening ? setGardening(false) : setGardening(true)
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Cooking</Text>
        <CheckBox
          disabled={false}
          value={Cooking}
          onValueChange={() => (Cooking ? setCooking(false) : setCooking(true))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Repairing & Householding</Text>
        <CheckBox
          disabled={false}
          value={RH}
          onValueChange={() => (RH ? setRH(false) : setRH(true))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Company</Text>
        <CheckBox
          disabled={false}
          value={Company}
          onValueChange={() => (Company ? setCompany(false) : setCompany(true))}
        />
      </View>
    </View>
  );
}
