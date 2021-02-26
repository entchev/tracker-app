import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  let points = []
  for (let index = 0; index < 20; index++) {
    points.push({
      latitude: 37.33233 + index * 0.001,
      longitude: -122.03121 + index * 0.001,
    })
  }
  //   const {
  //     state: { currentLocation, locations },
  //   } = useContext(LocationContext)

  //   if (!currentLocation) {
  //     return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
  //   }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.3323,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {/* <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor='rgba(158, 158, 255, 1.0)'
        fillColor='rgba(158, 158, 255, 0.3)'
      /> */}
      <Polyline coordinates={points} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})

export default Map
