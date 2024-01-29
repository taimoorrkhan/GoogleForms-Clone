import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Button, Card, HelperText, TextInput, useTheme } from 'react-native-paper'
import { useForm ,Controller} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { PersonalInfo,PersonalInfoSchema } from '../../src/schema/checkoutSchema'
import ControlledInput from '../../src/components/‎ControlledInput'
export default function PersonalDetails() {
  const {control,handleSubmit,formState:{errors}} = useForm<PersonalInfo>({
    resolver:zodResolver(PersonalInfoSchema)
  })
  console.log(errors);
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
          <ControlledInput 
            control={control}
            name='name'
            label='Name'
            placeholder='name'
          />
          <ControlledInput 
            control={control}
            name='email'
            label='Email'
            placeholder='email'
          />
        </Card.Content>
      </Card>  
      <Button onPress={handleSubmit(nextPage)} mode='contained'>
        Next
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})