import React from 'react';
import { View, Text } from 'react-native';
import { Button, formatDate } from '../../../framework/index';
import { styles } from './styles';

const CartScreen: React.FC = () => {
  const orderDate = new Date(); 
  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
      <Text>Data do Pedido: {formatDate(orderDate)}</Text>
      <Button title="Checkout" onPress={() => console.log('Checkout pressed')} />
    </View>
  );
};

export default CartScreen;
