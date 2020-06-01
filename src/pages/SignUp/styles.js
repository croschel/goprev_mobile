import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.Image`
  width: 210px;
  height: 140px;
  margin: 10px auto;
`;

export const GroupTitle = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #8574e7;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const FormBox = styled.View`
  background: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  border: none;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  padding: 10px 40px;
  justify-content: center;
`;
export const GroupInput = styled.View``;

export const Label = styled.Text`
  font-size: 16px;
`;

export const FormInput = styled.TextInput`
  margin: 0;
  padding: 5px;
`;

export const GroupButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled(RectButton)`
  background: #8574e7;
  padding: 10px;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  align-self: flex-end;
`;

export const BackButton = styled(RectButton)`
  background: #7b2be8;
  padding: 10px;
  border-radius: 30px;
  width: 60px;
  height: 60px;
`;
