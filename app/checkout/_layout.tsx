import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function CheckoutStack() {
  return <>
    <StatusBar style="light"  backgroundColor="#673AB8" />
    <Stack screenOptions={{
      contentStyle: {
        padding: 15,
        backgroundColor: '#F8EBF8',
        flex: 1,
      },
      headerStyle: {
        backgroundColor: '#673AB8'
      },
      headerTintColor: '#F8EBF8',

    }}>
      <Stack.Screen name="personal" options={{
        title: "Personel Info"
      }}
      />
      <Stack.Screen name="delivery" options={{
        title: "Delivery"
      }}
      />
      <Stack.Screen name="payment" options={{
        title: "Payment"
      }}
      />
    </Stack>
  </>
}