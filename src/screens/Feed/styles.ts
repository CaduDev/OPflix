import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');
interface ItemMangaProps {
  colored: boolean;
}
interface TextProps {
  color: String;
  size: String;
  strong: Boolean;
}

export const Container = styled.SafeAreaView`
  background: #333;
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-top: 20px;
  margin-left: 20px;
  height: 40px;
  width: 100%;
`;

export const ContainerItems = styled.ScrollView`
  padding: 10px;
`;

export const ItemManga = styled.TouchableOpacity<ItemMangaProps>`
  height: ${(screenWidth/2)+104}px;
  width: ${({ colored }) => colored? (screenWidth/2)+190+'px' : screenWidth/2+'px'};
  padding: 10px;
`;

export const CapaManga = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color?color:'#222'};
  font-size: ${({ size }) => size?size:'14'}px;
  font-weight: ${({ strong }) => strong?'700':'400'};
`;

export const Button = styled.TouchableOpacity`
  
`;

export const ItemAnime = styled.TouchableOpacity`
  height: ${(screenWidth/2)+70}px;
  width: ${screenWidth-80}px;
  padding: 10px;
  border-radius: 12px;
  overflow: hidden;
`;

export const CapaAnime = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 12px;
  overflow: hidden;
`;

export const TitleEpisode = styled.Text`
  color: ${({ color }) => color?color:'#222'};
  font-size: ${({ size }) => size?size:'14'}px;
  font-weight: ${({ strong }) => strong?'700':'400'};
  position: absolute;
  bottom: 40px;
  left: 20px;
`;

export const Pelicula = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0,0,0,0.999)']
})`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 12px;
  overflow: hidden;
`;