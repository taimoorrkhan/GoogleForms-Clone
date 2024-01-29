import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Link,useRouter } from 'expo-router'
import { Button, Card, TextInput, useTheme,RadioButton } from 'react-native-paper'

export default function DeliveryDetails() {
  const [shipping, setShipping] = useState('first');
  const theme = useTheme();
  const router = useRouter();
  const nextPage = () => {
    router.push('/checkout/payment')
  }
  return (
    <ScrollView contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    >
      
      <Card style={{
        backgroundColor: theme.colors.background,
      }} >
        <Card.Title title="Delivery Address" titleVariant='titleLarge'  />
        <Card.Content style={{ gap: 10 }}>
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} placeholder='City' label='City' />
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} placeholder='Address' label='Address' />
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} placeholder='Postal Code' label='Postal Code' />

        </Card.Content>
      </Card>
      <Card style={{
        backgroundColor: theme.colors.background,
      }} >
        <Card.Title title="Shipping Options" titleVariant='titleLarge' />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group value={shipping} onValueChange={newValue => setShipping(newValue)} >
            <RadioButton.Item label="Standard Delivery (Free)" value="first" />
            <RadioButton.Item label="Express Delivery (10$)" value="fast" />
            <RadioButton.Item label="Courier Delivery (20$)" value="same-day" />
          </RadioButton.Group>

        </Card.Content>
      </Card>
      <Button onPress={nextPage} mode='contained'>
        Next
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})