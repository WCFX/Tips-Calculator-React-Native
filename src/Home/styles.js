import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 50px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  color: #268;
  margin-bottom: 15px;
`;

export const InputValue = styled.TextInput`
  width: 50%;
  margin: 0 20px;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
`;


export const ButtonSubmit = styled.TouchableOpacity`
  height: 50px;
  width: 80%;
  background: #268;
  justify-content: center;
  margin-top: 50px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const TipArea = styled.View`
  margin-top: 50px;
  flex-direction: row;
`;
export const TipItem = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const TipValue = styled.Text`
  font-size: 22px;
  padding: 5px 20px;
  margin: 0 10px;
  background-color: #2e2e2e;
  border-radius: 4px;
  color: white;

`;


export const TextButton = styled.Text`
  align-self: center;
  font-size: 22px;
  letter-spacing: 1px;
  color: #eee;
  font-weight: bold;
`;

export const ContainerValue = styled.View`
  margin-top: 20px;
  height: 50px;
  border: 1px dashed #e999;
  width: 80%;
  background: #eee;
  justify-content: center;
  align-items: center;
`;
export const InformValue = styled.Text`
  text-transform: uppercase;
  padding-bottom: 10px;

`;


export const Value = styled.Text`
  color: #e11445;
`;

