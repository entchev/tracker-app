import { useState, useEffect } from 'react'
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location'
import { State } from 'react-native-gesture-handler'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)
  const [subscriber, setSubscriber] = useState(null)

  const startWatching = async () => {
    useEffect(() => {
      const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync()
          if (!granted) {
            throw new Error('Location permission not granted')
          }

          const sub = await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10,
            },
            callback
          )
          setSubscriber(sub)
        } catch (e) {
          setErr(e)
        }
      }

      if (shouldTrack) {
        startWatching()
      } else {
        if (subscriber) {
          subscriber.remove()
        }
        subscriber = null
      }

      return () => {
        if (subscriber) {
          subscriber.remove()
          setSubscriber(null)
        }
      }
    }, [shouldTrack, callback])

    return [err]
  }
}
