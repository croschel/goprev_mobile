import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Answer, SubmitButton, InsideInfo } from './styles';

function FirstQuestion({ navigation }) {
  const [profession, setProfession] = useState('');

  return (
    <Container>
      <Title>1. Nos conte, qual sua profissão</Title>
      <Answer
        placeholder="Qual sua ocupação"
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        value={profession}
        onChangeText={setProfession}
      />
      <SubmitButton
        onPress={() => navigation.navigate('SecondQuestion', { profession })}>
        <InsideInfo>Próxima</InsideInfo>
        <Icon name="arrow-forward" size={30} color="#fff" />
      </SubmitButton>
    </Container>
  );
}

export default FirstQuestion;
