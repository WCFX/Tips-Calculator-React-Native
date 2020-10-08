import React, { useState } from 'react';
import {
  Container,
  HeaderText,
  FormInput,
  InputValue,
  InputTip,
  ButtonSubmit,
  TextButton,
  ContainerValue,
  InformValue,
  Value
} from './styles';

const Home = () => {

  const [bill, setBill ] = useState('');
  const [tip, setTip ] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleCalc = () => {
    setShowResult(!showResult);
    let newBill = parseFloat(bill);
    let newTip = parseFloat(tip);

    if(newBill){
      setTip( (newTip/100) * newBill);
    }else {
      alert("Digite o valor da conta")
    }
  }

  return (
    <Container>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <FormInput>
        <InputValue
          keyboardType="numeric"
          placeholder="Valor da Conta"
          value={bill}
          onChangeText={number => setBill(number)}
          />
        <InputTip 
          keyboardType="numeric"
          placeholder="% Gorjeta"
          value={tip}
          onChangeText={number => setTip(number)}
          />
      </FormInput>
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