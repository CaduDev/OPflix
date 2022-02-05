import React from 'react';

import { ImageBackground } from 'react-native';

import { Container, Pelicula, Content, Text } from './styles';

export function Slider1({ item }: any) {
  return (
    <Container>
      <Content>
        <Text>Assita ao anime, leia os mángas, SBS, Databook's, GreenBook's e muitos mais</Text>
      </Content>
      <ImageBackground source={item.img} style={{flex: 1}} />
      <Pelicula />
    </Container>
  );
}