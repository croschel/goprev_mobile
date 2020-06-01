import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import google from '~/assets/google2.png';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  BackButton,
  FormBox,
  Title,
  GroupInput,
  Label,
  FormInput,
  SignGoogle,
  GroupOptions,
  Google,
  SubmitButton,
} from './styles';

function SignIn({ navigation }) {
  const [cpf, setCpf] = useState();
  const [password, setPassword] = useState();

  const passwordRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(cpf, password));
  }
  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#7B2BE8" />
        <Header>Temos oportunidades para você</Header>
        <BackButton onPress={() => navigation.navigate('Principal')}>
          <Icon name="arrow-back" size={40} color="#fff" />
        </BackButton>
        <FormBox style={{ elevation: 5 }}>
          <Title>Login</Title>
          <GroupInput>
            <Label>CPF</Label>
            <FormInput
              placeholder="Ex. xxx.xxx.xxx-xx"
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={cpf}
              onChangeText={setCpf}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
          </GroupInput>
          <GroupInput>
            <Label>Senha</Label>
            <FormInput
              placeholder="Digite sua senha"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleSubmit}
            />
          </GroupInput>
          <GroupOptions>
            <SubmitButton onPress={handleSubmit}>
              <Icon name="arrow-forward" size={40} color="#FFF" />
            </SubmitButton>
          </GroupOptions>
        </FormBox>
      </Container>
    </Background>
  );
}

export default SignIn;
