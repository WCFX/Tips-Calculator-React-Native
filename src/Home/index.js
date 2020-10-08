import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
import {
  Container,
  HeaderText,
  InputValue,
  TipArea,
  TipItem,
  TipValue,
  ButtonSubmit,
  TextButton,
  ContainerValue,
  InformValue,
  Value
} from './styles';

const Home = () => {

  const [bill, setBill ] = useState('');
  const [tip, setTip ] = useState(10);
  const [showResult, setShowResult] = useState(false);

  const handleCalc = () => {
    setShowResult(!showResult);
    let newBill = parseFloat(bill);

    if(newBill){
      setTip( (tip/100) * newBill);
    }else {
      alert("Digite o valor da conta")
    }
  }

  return (
    <Container>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
        <InputValue
          keyboardType="numeric"
          placeholder="Valor da Conta"
          value={bill}
          onChangeText={number => setBill(number)}
        />
      <TipArea>
        <TipItem><TipValue>5%</TipValue></TipItem>

        <TipItem><TipValue>10%</TipValue></TipItem>

        <TipItem><TipValue>15%</TipValue></TipItem>

        <TipItem><TipValue>20%</TipValue></TipItem>

      </TipArea>

      <ButtonSubmit
       onPress={handleCalc}
      >
        <TextButton>{!showResult ? 'Clique para calcular' : 'Clique para calcular novamente'}</TextButton>
      </ButtonSubmit>
      
      {showResult &&
      <>
        <ContainerValue>
          <InformValue>valor da conta</InformValue>
          <Value>R${(bill).toFixed(2)}</Value>
        </ContainerValue>
        
        <ContainerValue>
          <InformValue>valor da gorjeta </InformValue>
          <Value>R$ {(tip).toFixed(2)}</Value>
        </ContainerValue>
        
        <ContainerValue>
          <InformValue>valor total da conta </InformValue>
          <Value>R${(bill) + (tip).toFixed(2)}</Value>
        </ContainerValue>
      </>
      }
    </Container>
  ) 
}

export default Home;