import React from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  LeftHeader,
  Avatar,
  TextName,
  ClientRate,
  ClientName,
  ClientPoints,
  RightHeader,
  LogoutButton,
} from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.profile);

  function handleLogout() {
    dispatch(signOut());
  }

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
            <ClientPoints>16522pts</ClientPoints>
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
