import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Button } from 'react-native-paper'
export default function PayemntDetails() {
  const router = useRouter();


  const nextPage = () => {
    router.push('/')
  }
  return (
    <View>
      <Text style={{ fontSize: 20 }}>PayemntDetails</Text>
      <Button onPress={nextPage} mode='contained'>
        Submit
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})