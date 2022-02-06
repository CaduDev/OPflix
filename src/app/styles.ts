import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  width: 100%;
  position: relative;
  flex: 1;
`;

export const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Pelicula = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.89)', 'rgba(0,0,0,0.95)', 'rgba(0,0,0,0.999)']
})`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContentItem = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ItemMenu = styled.TouchableOpacity`
  width: 100%;
  background: rgba(0,0,0,0.33);
  margin-bottom: 10px;
  border-radius: 6px;
  height: 60px;
  display: flex;
  justify-content: center;
  padding-left: 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;
