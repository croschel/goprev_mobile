import React, { useState } from 'react';
import { CheckBox } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import { updateProfileRequest } from '~/store/modules/client/actions';
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
  const target = navigation.getParam('target');
  const profession = navigation.getParam('profession');
  const [investiment, setInvestiment] = useState('');
  const [firstlogin, setFirstLogin] = useState(true);

  const { profile } = useSelector((state) => state.client);
  const { id, name, password, email, cpf, phone } = profile;
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  async function handleSubmit() {
    setFirstLogin(true);
    console.tron.log(
      id,
      name,
      password,
      email,
      cpf,
      phone,
      target,
      profession,
      investiment,
      firstlogin
    );
    dispatch(
      updateProfileRequest(
        id,
        name,
        password,
        email,
        cpf,
        phone,
        target,
        profession,
        investiment,
        firstlogin
      )
    );
  }

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
            onValueChange={() => setInvestiment('R$50,00 - R$1000')}
          />
          <TextOption>R$50,00 - R$1000</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setInvestiment('R$1000,00 - R$5000')}
          />
          <TextOption>R$1000,00 - R$5000</TextOption>
        </GroupCheck>
        <GroupCheck>
          <CheckBox
            value={isSelected}
            onValueChange={() => setInvestiment('+R$5000')}
          />
          <TextOption>+R$5000</TextOption>
        </GroupCheck>
      </AnswerBox>
      <SubmitButton onPress={handleSubmit}>
        <InsideInfo>Finalizar</InsideInfo>
        <Icon name="arrow-forward" size={30} color="#fff" />
      </SubmitButton>
    </Container>
  );
}

export default ThirdQuestion;
