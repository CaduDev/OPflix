import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const ContentImage = styled.View`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80%;
  height: 300px;
  padding: 0px;
  margin: 0px;
`;

export const Pelicula = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0,0,0,0.88)', 'rgba(0,0,0,0.99)']
})`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
`;

export const Content = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 40%;
  padding-horizontal: 40px;
  bottom: 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`;