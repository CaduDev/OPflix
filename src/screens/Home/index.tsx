import React, { useRef, useState } from 'react';

import { Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

import {
  ContainerLogo, 
  Logo,
  Container, 
  Pelicula, 
  Content, 
  ContentButton, 
  Button,
  Title,
} from './styles';

import { logo, img1, img2, img3 } from '../../assets';
import { Slider1 } from './Sliders/Slider1';
import { Slider2 } from './Sliders/Slider2';
import { Slider3 } from './Sliders/Slider3';

function renderItem({ item, index }: any) {
  switch(item.type) {
    case 1:
      return (
        <Slider1 item={item} />
      )
    case 2:
      return (
        <Slider2 item={item} />
      )
    case 3:
      return (
        <Slider3 item={item} />
      )
    default:
      <></>
  }
}

export function Home({ navigation }: any) {
  const carousel = useRef(null);
  const [index, setIndex] = useState(0);

  const data: Array<Object> = [
    {
      type: 1,
      img: img1,
    },
    {
      type: 2,
      img: img2,
    },
    {
      type: 3,
      img: img3,
    }
  ]

  return (
    <Container>
      <ContainerLogo>
        <Logo source={logo} resizeMode="contain" />
      </ContainerLogo>
      <Pelicula />
      <Content>
        <Carousel
          ref={carousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onBeforeSnapToItem={(res) => setIndex(res)}
          
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={carousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#fff'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
        <ContentButton>
          <Button
            onPress={() => navigation.navigate('SingIn')}
          >
            <Title>Vamos lá!</Title>
          </Button>
        </ContentButton>
      </Content>
    </Container>
  );
}