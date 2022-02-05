import React from 'react';

import { Container, Image, ContentImage, IconImage, Content, Text } from './styles';

import { multiplataform } from '../../../../assets';

export function Slider3({ item }: any){
  return (
    <Container>
      <ContentImage>
        <Image source={item.img} resizeMode="contain"/>
      </ContentImage>
      <IconImage source={multiplataform} resizeMode="contain" />
      <Content>
        <Text>
          Assita em até 3 telas simultâneas em diferentes plataformas
        </Text>
      </Content>
    </Container>
  );
}

