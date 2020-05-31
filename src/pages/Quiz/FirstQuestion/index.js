import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Answer, SubmitButton, InsideInfo } from './styles';

function FirstQuestion({ navigation }) {
  const [answer, setAnswer] = useState('');

  function handleSubmit() { }
  return (
    <Container>
      <Title>1. Nos conte, qual sua profissão</Title>
      <Answer
        placeholder="Qual sua ocupação"
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        value={answer}
        onChangeText={setAnswer}
        onSubmitEditing={handleSubmit}
      />
      <SubmitButton onPress={() => navigation.navigate('SecondQuestion')}>
        <InsideInfo>Próxima</InsideInfo>
        <Icon name="arrow-forward" size={30} color="#fff" />
      </SubmitButton>
    </Container>
  );
}

export default FirstQuestion;
