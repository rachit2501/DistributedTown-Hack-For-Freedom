import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text} from 'react-native';

export default function Community({
  AM,
  setAM,
  LPS,
  setLPS,
  ARC,
  setARC,
  LP,
  setLP,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Administration & Managment</Text>
        <CheckBox
          disabled={false}
          value={AM}
          onValueChange={() => (AM ? setAM(false) : setAM(true))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Leadership and Publics Speaking</Text>
        <CheckBox
          disabled={false}
          value={LPS}
          onValueChange={() => (LPS ? setLPS(false) : setLPS(true))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Art, Music & Creativity</Text>
        <CheckBox
          disabled={false}
          value={ARC}
          onValueChange={() => (ARC ? setARC(false) : setARC(true))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Legal & Proposals</Text>
        <CheckBox
          disabled={false}
          value={LP}
          onValueChange={() => (LP ? setLP(false) : setLP(true))}
        />
      </View>
    </View>
  );
}
