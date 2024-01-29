import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Button, Card, TextInput, useTheme } from 'react-native-paper'
export default function PersonalDetails() {
  const router = useRouter();
  const theme = useTheme();
  const nextPage = () => {
    router.push('/checkout/delivery')
  }
  return (
    <ScrollView contentContainerStyle={{ gap: 10 }}>
      <Card style={{
        backgroundColor: theme.colors.background,
      }} >
        <Card.Title title="Personal Details" titleVariant='titleLarge' />
        <Card.Content style={{ gap: 10 }}>
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} placeholder="Name" label={"Name"} />
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} placeholder="example@example.com" label={"Email"} />
        </Card.Content>
      </Card>  
      <Button onPress={nextPage} mode='contained'>
        Next
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})