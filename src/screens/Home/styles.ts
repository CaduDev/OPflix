import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const ContainerLogo = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.88)', 'transparent']
})`
  position: absolute;
  width: 100%;
  /* height: 100; */
  z-index: 999;
  top: 0px;
  padding: 10px 0px;
  padding-bottom: 50px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 30px;
  left: 20px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #333;
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
  z-index: 9;
  flex: 1;
  position: relative;
`;

export const ContentButton = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background: red;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
