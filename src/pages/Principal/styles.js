import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.Text`
  font-size: 50px;
  padding: 100px 30px 30px 50px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonBox = styled.View`
  justify-content: center;
  margin: 50px auto;
`;

export const LoginButton = styled(RectButton)`
  background: #8574e7;
  border: none;
  border-radius: 16px;
  width: 200px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SignUpButton = styled(RectButton)`
  background: #fff;
  border: none;
  border-radius: 16px;
  width: 200px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const TextLogin = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const TextSignUp = styled.Text`
  color: #8574e7;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
