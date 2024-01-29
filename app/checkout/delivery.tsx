import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link,useRouter } from 'expo-router'
import {Button} from 'react-native-paper'

export default function DeliveryDetails() {
  const router = useRouter();
  const nextPage = () => {
    router.push('/checkout/payment')
  }
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Delivery Details</Text>
      <Button onPress={nextPage} mode='contained'>
        Next
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})