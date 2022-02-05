import React from 'react';

import { Container, Image, Content, Text } from './styles';

export function Slider2({ item }: any){
  return (
    <Container>
      <Image resizeMode="contain" source={item.img} />
      <Content>
        <Text>
          Baixe seus capitulos favoritos do mangá, ou seus episódios favoritos do anime e assita offline!
        </Text>
      </Content>
    </Container>
  );
}