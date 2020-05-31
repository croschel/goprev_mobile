import React from 'react';
import { Text, StatusBar } from 'react-native';

import Background from '~/components/Background';

import {
  Container,
  Header,
  LoginButton,
  SignUpButton,
  ButtonBox,
  TextLogin,
  TextSignUp,
} from './styles';

function Principal({ navigation }) {
  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#7B2BE8" />
        <Header>Oi, Bem Vindo ao GoPrev</Header>
        <ButtonBox>
          <LoginButton>
            <TextLogin onPress={() => navigation.navigate('SignIn')}>
              Login
            </TextLogin>
          </LoginButton>
          <SignUpButton onPress={() => navigation.navigate('SignUp')}>
            <TextSignUp>Cadastrar</TextSignUp>
          </SignUpButton>
        </ButtonBox>
      </Container>
    </Background>
  );
}

export default Principal;
