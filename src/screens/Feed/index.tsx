import React from 'react';

import { FlatList } from 'react-native'; 

import { 
  // Pelicula,
  Container,
  // Label,
  // ContainerItems, 
  // ItemManga, 
  // CapaManga, 
  // ItemAnime,
  // CapaAnime,
  // Button, 
  // Text,
  // TitleEpisode,
  // ContainerEmphasis
} from './styles';

import { c1010, c1011, c1012, c1013, c1014, c1015, c1016, c1017, thumb_movie, destaque } from '../../assets';

import { Header } from '../../components/Header';

import { Screen1 } from './Components/Screen1';
import { Screen2 } from './Components/Screen2';
import { Screen3 } from './Components/Screen3';
// function renderItem({ item }: any) {
//   if(item.type === 3) {
//     return (
//       <>
//         <Label>{item.title}</Label>
//         <ContainerItems horizontal={true} removeClippedSubviews={true}>
//           {item.data.map((res: any, index: number) => {
//             return (
//               <ItemAnime key={index+'_capa_manga'}>
//                 <CapaAnime source={res.capa} resizeMode="cover" />
//                 <Pelicula />
//                 <TitleEpisode color="#fff" size={18} strong={true}>{res.title}</TitleEpisode>
//               </ItemAnime>
//             )
//           })}
//         </ContainerItems>
//       </>
//     )
//   } 

//   if(item.type === 2) {    
//     return (
//       <>
//         <Label>{item.title}</Label>
//         <ContainerItems horizontal={true} removeClippedSubviews={true}>
//           {item.data.map((res: any, index: number) => {
//             return (
//               <ItemManga key={index+'_capa_manga'} colored={res.colored}>
//                 <CapaManga source={res.capa} resizeMode="center" />
//               </ItemManga>
//             )
//           })}
//         </ContainerItems>
//       </>
//     )
//   }

//   if(item.type === 1) {    
//     return (
//       <ContainerEmphasis>
//         <Pelicula />
//         {/* <Label>{item.title}</Label>
//         <ContainerItems horizontal={true} removeClippedSubviews={true}>
//           {item.data.map((res: any, index: number) => {
//             return (
//               <ItemManga key={index+'_capa_manga'} colored={res.colored}>
//                 <CapaManga source={res.capa} resizeMode="center" />
//               </ItemManga>
//             )
//           })}
//         </ContainerItems> */}
//       </ContainerEmphasis>
//     )
//   }
// }

export function Feed(props: any) {
  const manga_list:Array<Object> = [
    {
      id: 1,
      type: 1,
      title: "O ataque violento de sasaki: Divisão dos blindados vs yamato.",
      numberForEpisode: "1009",
      id_epidosio: 1,
      capa: destaque
    },
    {
      id: 2,
      type: 2,
      title: 'Minha lista',
      data: [
        {
          id: 1,
          type: 1,
          capa: c1017
        }, 
        {
          id: 7,
          capa: c1011,
          type: 1,
          colored: true
        }, 
        {
          id: 1,
          capa: thumb_movie,
          type: 2,
          title_episode: 'O ataque violento de sasaki: Divisão dos blindados vs yamato.'
        }, 
      ]
    },
    {
      id: 3,
      type: 3,
      title: 'Mangás',
      data: [
        {
          id: 1,
          capa: c1017
        }, 
        {
          id: 2,
          capa: c1016,
        }, 
        {
          id: 3,
          capa: c1015
        }, 
        {
          id: 4,
          capa: c1014
        }, 
        {
          id: 5,
          capa: c1013
        }, 
        {
          id: 6,
          capa: c1012
        }, 
        {
          id: 7,
          capa: c1011,
          colored: true
        }, 
        {
          id: 8,
          capa: c1010
        }
      ]
    },
    {
      title: 'Episodios',
      id: 4,
      type: 4,
      data: [
        {
          id: 1,
          capa: thumb_movie,
          title: 'episodio 1005',
        }, 
        {
          id: 2,
          capa: thumb_movie,
          title: 'episodio 1004',
        }, 
        {
          id: 3,
          capa: thumb_movie,
          title: 'episodio 1003',
        }, 
        {
          id: 4,
          capa: thumb_movie,
          title: 'episodio 1002',
        }, 
        {
          id: 5,
          capa: thumb_movie,
          title: 'episodio 1001',
        }, 
        {
          id: 6,
          capa: thumb_movie,
          title: 'episodio 1000',
        }, 
        {
          id: 7,
          capa: thumb_movie,
          title: 'episodio 999',
        }, 
        {
          id: 8,
          capa: thumb_movie,
          title: 'episodio 998',
        }
      ]
    },
  ];

  function renderItem({ item }: any) {
    switch(item.type) {
      case 1:
        return <Screen1 item={item} navigation={props.navigation} />
      case 2:
        return <Screen2 item={item} navigation={props.navigation} />
      case 3:
        return <Screen3 item={item} />
      default:
        <></>
    }
  }

  return (
    <Container>
      <Header />
      <FlatList
        data={manga_list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

