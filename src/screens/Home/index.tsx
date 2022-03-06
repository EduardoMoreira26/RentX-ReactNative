import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { Ionicons } from  '@expo/vector-icons';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton
} from './styles';
import { useTheme } from 'styled-components';

export function Home() {
  const navigation = useNavigation();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  function handleCardDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars(car: CarDTO) {
    navigation.navigate('MyCars');
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
            Total de {cars.length} carros
          </TotalCars>
        </HeaderContent>
      </Header>

      {loading ? <Load /> :
        <CarList
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            <Car
              data={item}
              onPress={() => handleCardDetails(item)}
            />
          }
        />
      }

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>

    </Container>
  );
}