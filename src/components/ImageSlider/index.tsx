import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage
} from './styles';

interface Props {
  imageUrl: string[];
}

export function ImageSlider({ imageUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>

        <FlatList
          data={imageUrl}
          keyExtractor={key => key}
          renderItem={({ item }) => (
            <CarImage
              source={{ uri: item }}
              resizeMode="contain"
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </CarImageWrapper>
    </Container>
  );
}