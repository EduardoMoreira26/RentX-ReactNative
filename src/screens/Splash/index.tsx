import React from 'react';
import { Button, StyleSheet, Dimensions } from 'react-native';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  Easing 
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

import {
  Container
} from './styles';

export function Splash() {
  const animation = useSharedValue(0);

  function handleAnimationPosition() {
    animation.value = Math.random() * (WIDTH - 100);
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(.95,-0.01,0,1.51)
          })
        }
      ]
    }
  });

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]} />

      <Button title="Splash" onPress={handleAnimationPosition} />
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }
})