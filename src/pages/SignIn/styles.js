import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.Text`
  font-size: 50px;
  padding: 100px 10px 20px 10px;
  font-weight: bold;
  color: #fff;
`;
export const BackButton = styled(RectButton)`
  background: #7b2be8;
  padding: 10px;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #8574e7;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const FormBox = styled.View`
  background: #fff;
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  border: none;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  padding: 40px;
  justify-content: center;
`;
export const GroupInput = styled.View``;

export const Label = styled.Text`
  font-size: 18px;
`;

export const FormInput = styled.TextInput``;

export const GroupOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SignGoogle = styled.View``;

export const Google = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SubmitButton = styled(RectButton)`
  background: #8574e7;
  padding: 10px;
  border-radius: 30px;
`;
