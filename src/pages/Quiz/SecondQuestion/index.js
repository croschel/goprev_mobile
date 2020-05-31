import React, { useState } from 'react';
import { CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  AnswerBox,
  GroupCheck,
  TextOption,
  SubmitButton,
  InsideInfo,
} from './styles';

function FirstQuestion({ navigation }) {
  const [answer, setAnswer] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  console.tron.log(answer);
  return (
    <Container>
      <Title>
        2. Se você pudesse aplicar ou investir seu dinheiro, em qual perfil você
        mais se encaixaria?
      </Title>
      <AnswerBox>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setAnswer('conservador')}
          />
          <TextOption>Conservador</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setAnswer('moderado')}
          />
          <TextOption>Moderado</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setAnswer('agressivo')}
          />
          <TextOption>Agressivo</TextOption>
        </GroupCheck>
      </AnswerBox>
      <SubmitButton onPress={() => navigation.navigate('ThirdQuestion')}>
        <InsideInfo>Próxima</InsideInfo>
        <Icon name="arrow-forward" size={30} color="#fff" />
      </SubmitButton>
    </Container>
  );
}

export default FirstQuestion;
