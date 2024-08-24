import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { lazy, Suspense } from 'react';
import CartScreen from './src/modules/Cart';
import CheckoutScreen from './src/modules/Checkout';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <CartScreen />
        <CheckoutScreen />
      </Suspense>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
