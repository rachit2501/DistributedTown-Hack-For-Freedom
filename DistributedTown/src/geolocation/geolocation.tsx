import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

interface props {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Geolocation: React.FunctionComponent<props> = (props) => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('screen').height,
  },
});

export default Geolocation;
