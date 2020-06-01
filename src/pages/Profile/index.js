import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Avatar,
  TextInfo,
  InfoBox,
  Info,
  SignOutButton,
  InsideText,
} from './styles';

function Profile() {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.profile);

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Avatar
        source={{
          uri: `https://api.adorable.io/avatars/100/${client.name}.png`,
        }}
      />
      <InfoBox>
        <Info>{client.name}</Info>
        <Info>{client.cpf}</Info>
        <Info>{client.email}</Info>
        <Info>{client.phone}</Info>
        <TextInfo>Link para chamar a galera e ganhar 100 pts</TextInfo>
        <TextInfo>goprev.com/{client.userCode}</TextInfo>
      </InfoBox>
      <SignOutButton onPress={handleSignOut}>
        <InsideText>Sair do Aplicativo</InsideText>
      </SignOutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={30} color={tintColor} />
  ),
};

export default withNavigationFocus(Profile);
