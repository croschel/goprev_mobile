import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;
export const InfoBox = styled.View`
  padding: 10px;
  margin: 20px;
  background: #f5f5f5;
  border-radius: 18px;
  height: 230px;
`;
export const Info = styled.Text`
  font-size: 30px;
  padding: 5px;
`;
export const SignOutButton = styled(RectButton)`
  background: #cb5377;
  padding: 25px;
  width: 340px;
  align-items: center;
  border-radius: 26px;
`;
export const InsideText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
