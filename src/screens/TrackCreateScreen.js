import '../_mockLocation'
import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Butto, Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as LocationContext } from '../context/LocationContext'
import { FontAwesome } from '@expo/vector-icons'
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext)
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording)
  })

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? (
        <Spacer>
          <Text style={styles.warning}>Please enable location services</Text>
        </Spacer>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  warning: {
    color: 'red',
    fontSize: 16,
  },
})

export default withNavigationFocus(TrackCreateScreen)
