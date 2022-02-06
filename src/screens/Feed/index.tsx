import React from 'react';

import { FlatList } from 'react-native'; 

import { 
  Pelicula,
  Container,
  Label,
  ContainerItems, 
  ItemManga, 
  CapaManga, 
  ItemAnime,
  CapaAnime,
  Button, 
  Text,
  TitleEpisode
} from './styles';

import { c1010, c1011, c1012, c1013, c1014, c1015, c1016, c1017, thumb_movie } from '../../assets';

function renderItem({ item }: any) {
  if(item.type === 2) {
    return (
      <>
        <Label>{item.title}</Label>
        <ContainerItems horizontal={true} removeClippedSubviews={true}>
          {item.data.map((res: any, index: number) => {
            return (
              <ItemAnime key={index+'_capa_manga'}>
                <CapaAnime source={res.capa} resizeMode="cover" />
                <Pelicula />
                <TitleEpisode color="#fff" size={18} strong={true}>{res.title}</TitleEpisode>
              </ItemAnime>
            )
          })}
        </ContainerItems>
      </>
    )
  } 


  return (
    <>
      <Label>{item.title}</Label>
      <ContainerItems horizontal={true} removeClippedSubviews={true}>
        {item.data.map((res: any, index: number) => {
          return (
            <ItemManga key={index+'_capa_manga'} colored={res.colored}>
              <CapaManga source={res.capa} resizeMode="center" />
            </ItemManga>
          )
        })}
      </ContainerItems>
    </>
  )
}

export function Feed() {
  const manga_list:Array<Object> = [
    {
      id: 1,
      type: 1,
      title: 'Mangás',
      data: [
        {
          id: 1,
          capa: c1010
        }, 
        {
          id: 2,
          capa: c1011,
          colored: true
        }, 
        {
          id: 3,
          capa: c1012
        }, 
        {
          id: 4,
          capa: c1013
        }, 
        {
          id: 5,
          capa: c1014
        }, 
        {
          id: 6,
          capa: c1015
        }, 
        {
          id: 7,
          capa: c1016
        }, 
        {
          id: 8,
          capa: c1017
        }
      ]
    },
    {
      title: 'Episodios',
      id: 2,
      type: 2,
      data: [
        {
          id: 1,
          capa: thumb_movie,
          title: 'episodio 998',
        }, 
        {
          id: 2,
          capa: thumb_movie,
          title: 'episodio 999',
        }, 
        {
          id: 3,
          capa: thumb_movie,
          title: 'episodio 1000',
        }, 
        {
          id: 4,
          capa: thumb_movie,
          title: 'episodio 1001',
        }, 
        {
          id: 5,
          capa: thumb_movie,
          title: 'episodio 1002',
        }, 
        {
          id: 6,
          capa: thumb_movie,
          title: 'episodio 1003',
        }, 
        {
          id: 7,
          capa: thumb_movie,
          title: 'episodio 1004',
        }, 
        {
          id: 8,
          capa: thumb_movie,
          title: 'episodio 1005',
        }
      ]
    },
  ]

  return (
    <Container>
      <FlatList
        data={manga_list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}

