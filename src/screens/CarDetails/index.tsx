import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';


import {
  Container,
  Header,
  CarImages
} from './styles';

export function CarDetails() {



  return (
    <Container>

      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={['https://www.honda.com.br/automoveis/sites/hab/files/2017-03/CIVIC_EX.png']}
        />
      </CarImages>




    </Container>
  );
}