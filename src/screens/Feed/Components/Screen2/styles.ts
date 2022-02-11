import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

import { ContentProps } from './types'

export const Container = styled.View`
  width: 100%;
  margin-top: 50px;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-horizontal: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;

export const All = styled.TouchableOpacity`

`;

export const Text = styled.Text`
  color: #fff;
  font-weight: 700;
`; 

export const ScrollContent = styled.ScrollView`
`;

export const Content = styled.TouchableOpacity<ContentProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width}px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Capa = styled.Image`
  height: 100%;
  width: 100%;
`;

export const TitleEpisode = styled.Text`
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 14px;
  width: 96%;
`;
