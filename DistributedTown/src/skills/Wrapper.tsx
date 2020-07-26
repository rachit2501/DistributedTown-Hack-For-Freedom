import React from 'react';
import Skills from './Skills';
import styles from './skills';
import {Image, ScrollView} from 'react-native';

export default function Wrapper() {
  return (
    <ScrollView>
      <Skills />
    </ScrollView>
  );
}
