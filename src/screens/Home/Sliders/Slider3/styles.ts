import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: screenWidth } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const ContentImage = styled.View`
  height: 250px;
  width: 100%;
  background: #000;
  border-radius: 14px;
  margin-top: -200px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const IconImage = styled.Image`
  width: 80px;
  height: 80px;
  position: absolute;
  margin-top: 40px;
  tint-color: #fff;
  left: 20px;
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
  bottom: 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: 700;  
`;
