import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

import { ButtonProps, TextButtonProps } from './types';

export const Container = styled.View`
  height: ${screenHeight * 0.7}px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Background = styled.ImageBackground`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Pelicula = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0,0,0,0.999)']
})`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const TitleContent = styled.View `
  width: 100%;
  margin-left: 30px;
  display: flex;
`;

export const Title = styled.Text `
  font-size: 32px;
  width: ${screenWidth-30}px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 0px;
`;

export const Subtitle = styled.Text `
  font-size: 22px;
  color: #fff;
  font-weight: 700;
`;

export const NumberForEpisode = styled.Text `
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const OptionsContent = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex-direction: ${(props) => props.direction?props.direction:'column'}
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background||'transparent'};
  padding: 10px 16px;
  border-radius: 6px;
  width: ${(screenWidth/3)-8}px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  color: ${(props) => props.color? props.color:'#fff'};
  font-size: ${(props) => props.size? RFValue(props.size)+'px':'16px'};
  display: flex;
`; 

export const Icon = styled(Feather)`
  font-size: ${({ size }: any) => RFValue(size)}px;
`;