import React from 'react';

import { Dimensions } from 'react-native';

import { 
  Container, 
  ContainerHeader,
  Title, 
  All,
  Text,
  ScrollContent, 
  Content,
  Capa,
  TitleEpisode,
} from './styles';

const { width: screenWidth } = Dimensions.get('window')

import { ItemProps } from '../Screen2/types';

export function Screen2({ item, navigation }: ItemProps) {
  return (
    <Container>
      <ContainerHeader>
        <Title>{item.title}</Title>
        <All onPress={() => navigation.navigate('Todos capítulo')}>
          <Text>Ver todos</Text>
        </All>
      </ContainerHeader>
      <ScrollContent horizontal={true} removeClippedSubviews={true}>
        {item.data.map((res: any, index: number) => {
          const width = res.type===1 && res.colored? 
            (screenWidth/2)+180:res.type===1?screenWidth/2:screenWidth-20;
          
          const height = res.type===1?(screenWidth/2)+104+'px':(screenWidth/2)+104+'px';

          const resizeMode = res.type===1?'contain':'contain';

          return (
            <Content key={index+'_data'} width={width} height={height}>
              <Capa source={res.capa} resizeMode={resizeMode} />
              {res.type === 2 && (
                <TitleEpisode numberOfLines={1}>{res.title_episode}</TitleEpisode>
              )}
            </Content>
          )
        })}
      </ScrollContent>
    </Container>
  )
}