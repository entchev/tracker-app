import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Butto, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons'
import Map from '../components/Map'
import { requestPermissionsAsync } from 'expo-location'

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync()
      if (!granted) {
        throw new Error('Location permission not granted')
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? (
        <Spacer>
          <Text style={styles.warning}>Please enable location services</Text>
        </Spacer>
      ) : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  warning: {
    color: 'red',
    fontSize: 16,
  },
})

export default TrackCreateScreen
