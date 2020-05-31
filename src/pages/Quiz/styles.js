import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const BackImg = styled.Image`
  width: 100%;
  height: 300px;
  margin: 20px auto;
`;

export const Header = styled.Text`
  color: #8574e7;
  font-weight: bold;
  font-size: 34px;
  padding: 10px;
`;

export const Footer = styled.Text`
  color: #8574e7;
  font-size: 16px;
  padding: 2px 30px;
`;

export const GoForward = styled(RectButton)`
  background: #8574e7;
  width: 150px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px;
  border-radius: 18px;
  margin-top: 15px;
`;

export const InsideInfo = styled.Text`
  color: #fff;
`;
