import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';

import {
  Container,
  Header,
  Title,
  LeftHeader,
  Avatar,
  TextName,
  ClientRate,
  ClientName,
  ClientPoints,
  RightHeader,
  LogoutButton,
  Content,
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

function Dashboard() {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.profile);
  console.tron.log(client);
  const { id, name, password, email, cpf, phone, target } = client;
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    async function loadCompanies() {
      const response = await api.post('plan/target/', {
        id,
        name,
        password,
        email,
        cpf,
        phone,
        target,
      });
      setCompanies(response.data);
    }
    loadCompanies();
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }
  console.tron.log(companies);
  return (
    <Container>
      <Header>
        <LeftHeader>
          <Avatar
            source={{
              uri: `https://api.adorable.io/avatars/100/${client.name}.png`,
            }}
          />
          <TextName>
            <ClientName>{client.name}</ClientName>
            <ClientPoints>{client.points} Pts</ClientPoints>
            <ClientRate>★★☆☆☆</ClientRate>
          </TextName>
        </LeftHeader>
        <RightHeader>
          <LogoutButton onPress={handleLogout}>
            <Icon name="exit-to-app" size={45} color="#610000" />
            <Text style={{ color: '#610000', marginLeft: 10 }}>Sair</Text>
          </LogoutButton>
        </RightHeader>
      </Header>
      <Content>
        <Title>Qual plano você topa?</Title>
        {companies.map((cp) => (
          <BoxCompany>
            <BoxTop>
              <NameCompany>{cp.name}</NameCompany>
            </BoxTop>
            <BoxMiddle>
              <Description>{cp.description}</Description>
              <Price>R${cp.price},00</Price>
            </BoxMiddle>
            <BoxBottom>
              <Target>Plano</Target>
              <DetailsButton>
                <Icon name="loupe" size={40} color="#000" />
              </DetailsButton>
            </BoxBottom>
          </BoxCompany>
        ))}
      </Content>
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={40} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
