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
  const profession = navigation.getParam('profession');
  console.tron.log(profession);

  const [target, setTarget] = useState('');
  const [isSelected, setIsSelected] = useState(false);

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
            onValueChange={() => setTarget('conservador')}
          />
          <TextOption>Conservador</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setTarget('moderado')}
          />
          <TextOption>Moderado</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setTarget('agressivo')}
          />
          <TextOption>Agressivo</TextOption>
        </GroupCheck>
      </AnswerBox>
      <SubmitButton
        onPress={() =>
          navigation.navigate('ThirdQuestion', { target, profession })
        }>
        <InsideInfo>Próxima</InsideInfo>
        <Icon name="arrow-forward" size={30} color="#fff" />
      </SubmitButton>
    </Container>
  );
}

export default FirstQuestion;
