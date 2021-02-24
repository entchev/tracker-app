import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.title}>Sign up for Tracker</Text>
      </Spacer>
      <Input label='Email' />
      <Spacer />
      <Input label='Password' />
      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    marginBottom: 200,
    flex: 1,
    justifyContent: 'center',
  },
})

export default SignupScreen
