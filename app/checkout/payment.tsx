import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Button, Card, DataTable, TextInput, useTheme } from 'react-native-paper'
export default function PayemntDetails() {
  const theme = useTheme();
  const router = useRouter();


  const nextPage = () => {
    router.push('/')
  }
  return (
    <ScrollView contentContainerStyle={{ gap: 10 }}>
      <Card style={{
        backgroundColor: theme.colors.background,
      }} >
        <Card.Title title="Delivery Address" titleVariant='titleLarge' />
        <Card.Content style={{ gap: 10 }}>
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} label='Card Title' />
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} label='Card Number'
            placeholder='4242 4242 4242 4242' />

          <DataTable style={{
            backgroundColor: theme.colors.background,

          }}>
            <DataTable.Row aria-label='E'>
              <DataTable.Cell>Month</DataTable.Cell>
              <DataTable.Cell>Year</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell> <TextInput style={{
                backgroundColor: theme.colors.background,
              }} label='MM' /> </DataTable.Cell>
              <DataTable.Cell> <TextInput style={{
                backgroundColor: theme.colors.background,
              }} label='YYYY' /> </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <TextInput style={{
            backgroundColor: theme.colors.background,
          }} label="Security Code" />

        </Card.Content>
      </Card>
      <Button onPress={nextPage} mode='contained'>
        Submit
      </Button>
    </ScrollView >
  )
}

const styles = StyleSheet.create({})