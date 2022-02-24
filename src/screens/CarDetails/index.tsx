import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';


import {
  Container,
  Header,
  CarImages,
  Description,
  Content,
  Details,
  Brand,
  Price,
  Rent,
  Period, 
  Name,
  About
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

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580,00</Price>
          </Rent>
        </Details>

        <About>
          Esse carro é muito potente poquer o seu motor é rápido e veloz, seus pneus tem aderencia e mais um monte de coisa.
        </About>
      </Content>


    </Container>
  );
}