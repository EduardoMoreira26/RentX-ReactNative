import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

// import { RFValue } from 'react-native-responsive-fontsize';


import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';


import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: 'AUDI',
    name: 'Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://pngimg.com/uploads/audi/audi_PNG99491.png',

  }

  function handleCardDetails() {
    navigation.navigate('CarDetails');
  }


  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
          // width={RFValue(108)}
          // height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) =>
          <Car
            data={carData}
            onPress={handleCardDetails}
          />
        }
      />



    </Container>
  );
}