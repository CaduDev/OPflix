import React, { useState, useEffect } from 'react';

import { ItemProps } from './types';

import { 
  Container, 
  Background, 
  Pelicula, 
  TitleContent, 
  Title, 
  Subtitle, 
  NumberForEpisode,
  OptionsContent,
  Button,
  TextButton,
  Icon
} from './styles';

export function Screen1({ item, navigation }: ItemProps) {
  const [title, setTitle] = useState<String>('');
  const [subTitle, setSubTitle] = useState<String>('');

  useEffect(() => {
    if(item.title.includes(':')){
      const newTitle = item.title.split(':');

      setTitle(newTitle[0]+':');
      setSubTitle(newTitle[1]);
    } else {
      setTitle(item.title);
    }
  }, [item.title])

  return (
    <Container>
      <Background source={item.capa} resizeMode="cover" />
      <Pelicula />
      <TitleContent>
        <NumberForEpisode>Episodio {item.numberForEpisode}</NumberForEpisode>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
      </TitleContent>
      <OptionsContent>
        <Button>
          <Icon name="plus" size={22} color="#fff" />
          <TextButton size={18}>Minha lista</TextButton>
        </Button>
        <Button 
          direction={'row'} 
          background={"#fff"}
          onPress={() => navigation.navigate('video')}
        >
          <Icon name="play" size={22} color="#000" />
          <TextButton color={"#000"} style={{ marginLeft: 4}} size={18}>Play</TextButton>
        </Button>
        <Button>
          <Icon name="info" size={22} color="#fff" />
          <TextButton size={18}>Play</TextButton>
        </Button>
      </OptionsContent>
    </Container>
  );
}