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

function ThirdQuestion({ navigation }) {
  const [answer, setAnswer] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  console.tron.log(answer);
  return (
    <Container>
      <Title>
        3. Se você fosse aplicar ou investir, quanto você estaria disposto a
        disponibilizar em capital?
      </Title>
      <AnswerBox>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setAnswer('R$50,00 - R$1000')}
          />
          <TextOption>R$50,00 - R$1000</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setAnswer('R$1000,00 - R$5000')}
          />
          <TextOption>R$1000,00 - R$5000</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setAnswer('+R$5000')}
          />
          <TextOption>+R$5000</TextOption>
        </GroupCheck>
      </AnswerBox>
      <SubmitButton onPress={() => navigation.navigate('Dashboard')}>
        <InsideInfo>Finalizar</InsideInfo>
        <Icon name="arrow-forward" size={30} color="#fff" />
      </SubmitButton>
    </Container>
  );
}

export default ThirdQuestion;
