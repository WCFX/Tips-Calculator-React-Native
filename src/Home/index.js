import React, { useState } from 'react';
import {
  Container,
  HeaderText,
  Input,
  ButtonSubmit,
  TextButton,
  ContainerValue,
  InformValue,
  Value
} from './styles';

const Home = () => {

  const [bill, setBill ] = useState('');
  const [tip, setTip ] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleCalc = () => {
    setShowResult(!showResult);
    let newBill = parseFloat(bill);

    if(newBill){
      setTip( (10/100) * newBill);
    }else {
      alert("Digite o valor da conta")
    }
  }

  return (
    <Container>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        keyboardType="numeric"
        placeholder="Digite aqui o valor da conta"
        value={bill}
        onChangeText={number => setBill(number)}
      />
      <ButtonSubmit
       onPress={handleCalc}

      >
        <TextButton>{!showResult ? 'Clique para calcular' : 'Clique para calcular novamente'}</TextButton>
      </ButtonSubmit>
      
      {showResult &&
      <>
        <ContainerValue>
          <InformValue>valor da conta</InformValue>
          <Value>R$ {bill}</Value>
        </ContainerValue>
        
        <ContainerValue>
          <InformValue>valor da gorjeta </InformValue>
          <Value>R$ {tip}</Value>
        </ContainerValue>
        
        <ContainerValue>
          <InformValue>valor total da conta </InformValue>
          <Value>R$ {parseFloat(bill) + tip}</Value>
        </ContainerValue>
      </>
      }
    </Container>
  ) 
}

export default Home;