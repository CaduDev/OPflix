import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { Video } from 'expo-av';

const { height, width } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  flex: 1;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ContainerVideoControls = styled.View`
  position: absolute;
  bottom: 10px;
  display: none;
`;

export const VideoCurrent = styled(Video)`
  align-self: center;
  width: ${width}px;
  height: ${height}px;
`;