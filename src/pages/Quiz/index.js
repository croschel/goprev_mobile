import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import background from '~/assets/background-question.png';

import {
  Container,
  Header,
  BackImg,
  Footer,
  GoForward,
  InsideInfo,
} from './styles';

function Quiz({ navigation }) {
  return (
    <Container>
      <Header>Queremos conhecer um pouco mais de você, João</Header>
      <BackImg source={background} />
      <Footer>
        Responda este pequeno questionário para que possamos encontrar melhores
        oportunidades de acordo com seu perfil
      </Footer>
      <GoForward onPress={() => navigation.navigate('FirstQuestion')}>
        <InsideInfo>Questionário</InsideInfo>
        <Icon name="arrow-forward" size={30} color="#fff" />
      </GoForward>
    </Container>
  );
}

export default Quiz;
