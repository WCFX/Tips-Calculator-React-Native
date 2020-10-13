import styled from 'styled-components/native';
 
export const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  width: 100%;
  height: 100%;
`;

export const HeaderText = styled.Text`
  font-size:25px;
  margin-top: 50px;
`;

export const Input = styled.TextInput`
  width:90%;
  height: 50px;
  font-size:18px;
  background-color:#EEE;
  margin: 20px 0;  
  border-radius:10px;
  padding:10px;
`;

export const PctArea = styled.View`
  flex-direction:row;
  width: 20%;
  justify-content: center;
  margin-bottom:20px;
`;

export const PctItem = styled.TouchableHighlight`
  height: 50px;
  width: 80%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  margin: 0 20px;

`;

export const PctText = styled.Text`
  color: #0888;
  font-weight: bold;
  font-size: 18px;
`;

export const CalcButton = styled.TouchableHighlight`
  height: 50px;
  width: 50%;
  border: 1px solid black;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin: 50px 0 30px 0;
`;
export const CalcText = styled.Text`
  font-size: 28px;
  color: #0888;
  font-weight: bold;
`;

export const ResultArea = styled.View`
  width: 80%;
  height: 250px;
  border: 3px dashed black;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;
export const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weight:bold;
  width: 100%;
  text-align: center;
  background: #eee;
  color: #0888;
  padding: 2px;
`;
export const ResultItem = styled.Text`
  font-size:15px;
  margin: 20px 0;
  font-weight: bold;
`;
