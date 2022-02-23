import React from 'react';
import { StatusBar } from 'react-native';

// import { RFValue } from 'react-native-responsive-fontsize';


import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';


import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export function Home() {
  const carDataOne = {
    brand: 'AUDI',
    name: 'Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://image.pngaaa.com/570/1341570-middle.png',
    
  }

  const carDataTwo = {
    brand: 'HONDA',
    name: 'Civic',
    rent: {
      period: 'AO DIA',
      price: 155,
    },
    thumbnail: 'https://image.pngaaa.com/570/1341570-middle.png',
    
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

      <Car data={carDataOne}/>
      <Car data={carDataTwo}/>

    </Container>
  );
}