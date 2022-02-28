import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

import ArrowSvg from '../../assets/arrow.svg';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';


export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }


  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          backgroundColor='transparent'
        />
        <BackButton color={theme.colors.shape} onPress={() => { }} />
        <Title>
          Escolha uma {'\n'}
          data de incio e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              18/06/2022
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={true}>
              18/06/2022
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={null}
          // onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button
          title="Confirmar" 
          onPress={handleConfirmRental} 
          // enabled={!!rentalPeriod.startFormatted}
        />
      </Footer>
    </Container>
  );
}