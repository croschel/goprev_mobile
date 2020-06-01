import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  BoxCompany,
  BoxTop,
  LogoCompany,
  NameCompany,
  BoxMiddle,
  Description,
  Price,
  BoxBottom,
  Target,
  DetailsButton,
} from './styles';

function Applies() {
  return (
    <Container>
      <Title>Coloque seu pontos para plano de previdência ou saúde</Title>
      <Title>Ponha seus Pontos aqui</Title>

      <BoxCompany>
        <BoxTop>
          <NameCompany>UNIMED</NameCompany>
        </BoxTop>
        <BoxMiddle>
          <Description>Plano básico</Description>
          <Price>10000 pts</Price>
        </BoxMiddle>
        <BoxBottom>
          <Target>Plano</Target>
          <DetailsButton>
            <Icon name="loupe" size={40} color="#000" />
          </DetailsButton>
        </BoxBottom>
      </BoxCompany>
    </Container>
  );
}

Applies.navigationOptions = {
  tabBarLabel: 'Investimentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="monetization-on" size={40} color={tintColor} />
  ),
};

export default Applies;
