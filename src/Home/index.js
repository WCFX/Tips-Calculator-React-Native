import React, { useState } from 'react';

import { Container, HeaderText, Input } from './styles';

const Home = () => {

  const [bill, setBill ] = useState('');

  return (
    <Container>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        keyboardType="numeric"
        placeholder="Digite aqui o valor da conta"
        value={bill}
        onChangeText={number => setBill(number)}
      />
    </Container>
  ) 
}

export default Home;