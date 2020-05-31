import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

// import { Container } from './styles';

function Profile() {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={30} color={tintColor} />
  ),
};

export default withNavigationFocus(Profile);
