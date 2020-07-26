import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text} from 'react-native';

export default function Professional({
  tect,
  setTech,
  Accounting,
  setAccounting,
  design,
  setDesign,
  teaching,
  setTeaching,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Tech & Computer</Text>
        <CheckBox
          disabled={false}
          value={tect}
          onValueChange={() => (tect ? setTech(false) : setTech(true))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Accounting</Text>
        <CheckBox
          disabled={false}
          value={Accounting}
          onValueChange={() =>
            Accounting ? setAccounting(false) : setAccounting(true)
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Design</Text>
        <CheckBox
          disabled={false}
          value={design}
          onValueChange={() => (design ? setDesign(false) : setDesign(true))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          padding: 0,
        }}>
        <Text>Teaching</Text>
        <CheckBox
          disabled={false}
          value={teaching}
          onValueChange={() =>
            teaching ? setTeaching(false) : setTeaching(true)
          }
        />
      </View>
    </View>
  );
}
