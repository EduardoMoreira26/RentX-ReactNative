import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, StyleSheet, BackHandler } from 'react-native';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';

import Animated, { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

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
} from './styles';
import { useTheme } from 'styled-components';

export function Home() {
	const navigation = useNavigation();

	const [cars, setCars] = useState<CarDTO[]>([]);
	const [loading, setLoading] = useState(true);
	const theme = useTheme();

	const positionY = useSharedValue(0);
	const positionX = useSharedValue(0);

	function handleCardDetails(car: CarDTO) {
		navigation.navigate('CarDetails', { car });
	}

	function handleOpenMyCars(car: CarDTO) {
		navigation.navigate('MyCars');
	}



	const myCarsButtonStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: positionX.value },
				{ translateY: positionY.value },
			]
		};
	});

	const onGestureHandler = useAnimatedGestureHandler({
		onStart: (_, ctx: any) => {
			ctx.positionX = positionX.value;
			ctx.positionY = positionY.value;
		},
		onActive: (event, ctx: any) => {
			positionX.value = ctx.positionX + event.translationX;
			positionY.value = ctx.positionY + event.translationY;
		},
		onEnd: (event, ctx) => {
			positionX.value = withSpring(0);
			positionY.value = withSpring(0);
		},
	});


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

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => {
			return true;
		});
	}, []);


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
					{
						!loading &&
						<TotalCars>
							Total de {cars.length} carros
						</TotalCars>
					}

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

			<PanGestureHandler onGestureEvent={onGestureHandler}>
				<Animated.View
					style={[
						myCarsButtonStyle,
						{
							position: 'absolute',
							bottom: 13,
							right: 22
						}
					]}
				>
					<ButtonAnimated
						style={[styles.button, { backgroundColor: theme.colors.main }]}
						onPress={handleOpenMyCars}
					>
						<Ionicons
							name="ios-car-sport"
							size={32}
							color={theme.colors.shape}
						/>
					</ButtonAnimated>
				</Animated.View>
			</PanGestureHandler>


		</Container>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	}
});