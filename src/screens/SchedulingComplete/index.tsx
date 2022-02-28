import React from 'react';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Message, Title, Footer } from './styles';
import { StatusBar, useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';


export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg
        width={width}
      />

      <Content>
        <DoneSvg
          width={80}
          height={80}
        />
        <Title>Carro Alugado</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pega o seu automovel
        </Message>

        <Footer>
          <ConfirmButton title="OK" onPress={handleConfirm} />
        </Footer>
      </Content>
    </Container>
  );
}