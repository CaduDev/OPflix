import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background: transparent;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 12px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 30px;
`;

export const Icon = styled(Feather)`
  font-size: ${({ size }: any) => RFValue(size)}px;
`;

export const UserImage = styled.View`
  width: ${({ size_userImage }: any) => RFValue(size_userImage)}px;
  height: ${({ size_userImage }: any) => RFValue(size_userImage)}px;
  border-radius: 50px;
  overflow: hidden;
  border-width: 3px;
  border-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;