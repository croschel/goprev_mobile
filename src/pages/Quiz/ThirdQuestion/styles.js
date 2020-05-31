import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin: 20px auto 10px auto;
  font-weight: bold;
  text-align: justify;
`;

export const AnswerBox = styled.View``;
export const GroupCheck = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const TextOption = styled.Text``;

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  background: #8574e7;
  width: 120px;
  height: 45px;
  margin: 30px;
  border-radius: 18px;
`;

export const InsideInfo = styled.Text`
  font-size: 16px;
  color: #fff;
`;
