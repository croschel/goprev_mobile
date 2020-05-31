import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin: 20px auto 10px auto;
  font-weight: bold;
  text-align: justify;
`;

export const Answer = styled.TextInput`
  width: 75%;
  border-bottom-width: 1px;
  border-bottom-color: #bcbcbc;
  margin: 20px auto 10px auto;
`;

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  background: #8574e7;
  width: 100px;
  height: 45px;
  margin: 30px;
  border-radius: 18px;
`;

export const InsideInfo = styled.Text`
  font-size: 16px;
  color: #fff;
`;
