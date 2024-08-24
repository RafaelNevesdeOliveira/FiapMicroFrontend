import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../../framework/index';
import { styles } from './styles';

const CheckoutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Checkout Screen</Text>
      <Button title="Complete Purchase" onPress={() => console.log('Purchase completed')} />
    </View>
  );
};

export default CheckoutScreen;
