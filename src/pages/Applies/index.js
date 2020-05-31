import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

const Applies = () => {
  return <View />;
};

Applies.navigationOptions = {
  tabBarLabel: 'Investimentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="monetization-on" size={40} color={tintColor} />
  ),
};

export default Applies;
