import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Community from './components/Community';
import Home from './components/Home';
import Professional from './components/Professional';
import ViewPager from '@react-native-community/viewpager';
import styles from './skills';

export default function Skills() {
  const [component, updateComponent] = useState('Community');
  // home
  const [gardening, setGardening] = useState(false);
  const [Cooking, setCooking] = useState(false);
  const [RH, setRH] = useState(false);
  const [Company, setCompany] = useState(false);

  // community
  const [AM, setAM] = useState(false);
  const [LPS, setLPS] = useState(false);
  const [ARC, setARC] = useState(false);
  const [LP, setLP] = useState(false);

  // professional
  const [tect, setTech] = useState(false);
  const [Accounting, setAccounting] = useState(false);
  const [design, setDesign] = useState(false);
  const [teaching, setTeaching] = useState(false);

  return (
    <>
      <Image source={require('./skills/path_177.png')} style={styles.image} />

      <View style={styles.fixToText}>
        <Button
          title="Community Life"
          onPress={() => updateComponent('Community')}
        />
        <Button title="At Home" onPress={() => updateComponent('Home')} />
        <Button title="Professional" onPress={() => updateComponent('Prof')} />
      </View>

      <View style={styles.viewarea}>
        {component === 'Community' && (
          <Community
            AM={AM}
            setAM={setAM}
            LPS={LPS}
            setLPS={setLPS}
            ARC={ARC}
            setARC={setARC}
            LP={LP}
            setLP={setLP}
          />
        )}

        {component === 'Home' && (
          <Home
            gardening={gardening}
            setGardening={setGardening}
            Cooking={Cooking}
            setCooking={setCooking}
            RH={RH}
            setRH={setRH}
            Company={Company}
            setCompany={setCompany}
          />
        )}

        {component === 'Prof' && (
          <Professional
            tect={tect}
            setTech={setTech}
            Accounting={Accounting}
            setAccounting={setAccounting}
            design={design}
            setDesign={setDesign}
            teaching={teaching}
            setTeaching={setTeaching}
          />
        )}
      </View>
      {/* <View>
  <Text>Your Selection</Text>
</View> */}
      <TouchableOpacity style={styles.button}>
        <Text>Next</Text>
      </TouchableOpacity>
    </>
  );
}
