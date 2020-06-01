import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import goprev from '~/assets/goprev.png';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  FormBox,
  GroupTitle,
  Title,
  GroupInput,
  Label,
  FormInput,
  BackButton,
  SubmitButton,
} from './styles';

function SignUp({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [cpf, setCpf] = useState();
  const [codeaffiliate, setCodeaffiliate] = useState();
  const [password, setPassword] = useState();

  const emailRef = useRef();
  const telefoneRef = useRef();
  const cpfRef = useRef();
  const affiliateRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      signUpRequest(name, email, telefone, cpf, codeaffiliate, password)
    );
    navigation.navigate('Principal');
  }
  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#7B2BE8" />
        <GroupTitle>
          <BackButton onPress={() => navigation.navigate('Principal')}>
            <Icon name="arrow-back" size={40} color="#fff" />
          </BackButton>
          <Header source={goprev} />
        </GroupTitle>

        <FormBox style={{ elevation: 5 }}>
          <Title>Cadastrar</Title>
          <GroupInput>
            <Label>Nome</Label>
            <FormInput
              placeholder="Digite seu nome completo"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={name}
              onChangeText={setName}
              onSubmitEditing={() => emailRef.current.focus()}
            />
          </GroupInput>
          <GroupInput>
            <Label>Email</Label>
            <FormInput
              ref={emailRef}
              placeholder="Ex xxx@gmail.com"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => telefoneRef.current.focus()}
            />
          </GroupInput>
          <GroupInput>
            <Label>Telefone</Label>
            <FormInput
              ref={telefoneRef}
              placeholder="Ex. (xx) 9xxxx-xxxx"
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={telefone}
              onChangeText={setTelefone}
              onSubmitEditing={() => cpfRef.current.focus()}
            />
          </GroupInput>
          <GroupInput>
            <Label>CPF</Label>
            <FormInput
              ref={cpfRef}
              placeholder="Ex. xxx.xxx.xxx-xx"
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={cpf}
              onChangeText={setCpf}
              onSubmitEditing={() => affiliateRef.current.focus()}
            />
          </GroupInput>
          <GroupInput>
            <Label>Código Indicação</Label>
            <FormInput
              ref={affiliateRef}
              placeholder="Digite o código ID"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={codeaffiliate}
              onChangeText={setCodeaffiliate}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
          </GroupInput>
          <GroupInput>
            <Label>Senha</Label>
            <FormInput
              ref={passwordRef}
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

          <SubmitButton onPress={handleSubmit}>
            <Icon name="arrow-forward" size={40} color="#FFF" />
          </SubmitButton>
        </FormBox>
      </Container>
    </Background>
  );
}

export default SignUp;
