import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: screenWidth } = Dimensions.get('window');

export const Container = styled.View`
  position: relative;
  flex: 1;
  padding-horizontal: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${screenWidth-100}px;
  max-height: ${screenWidth-100}px;
  margin-top: -200px;
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
