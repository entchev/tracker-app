import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons'

const TrackCreateScreen = () => {
  return <Text style={{ fontSize: 48 }}>Create Track</Text>
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
