import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

function Map() {
  const region = {
    latitude: 44.812,
    longitude: 15.8686,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    // width: 300,
    // height: 300,
    // minHeight: 100,
  },
});
