import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
import {
  Page,
  HeaderText,
  Input,
  PctArea,
  PctItem,
  PctText,
  CalcButton,
  CalcText,
  ResultArea,
  ResultItemTitle,
  ResultItem,

} from './styles';

const Home = () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const handleCalc = () => {
    let nBill = parseFloat(bill);
    
    if(nBill) {
      setTip( (pct/100) * nBill );
    }
  }

  useEffect(()=>{
    handleCalc();
  }, [pct]);


  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#b1b1b1"
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />

      <PctArea>
        <PctItem 
          onFocus={true}
          onPress={()=>setPct(5)} >
          <PctText>5%</PctText></PctItem>

        <PctItem onPress={()=>setPct(10)}><PctText>10% </PctText></PctItem>

        <PctItem onPress={()=>setPct(15)}><PctText>15%</PctText></PctItem>

        <PctItem onPress={()=>setPct(20)}><PctText>20%</PctText></PctItem>

      </PctArea>

      <CalcButton onPress={handleCalc}><CalcText>Calcular...</CalcText></CalcButton>
      {tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page>
  ) 
}

export default Home;