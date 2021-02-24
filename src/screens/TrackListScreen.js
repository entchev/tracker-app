import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Track List</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen
