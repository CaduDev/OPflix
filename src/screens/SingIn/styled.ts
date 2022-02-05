import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; 
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

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ContentForm = styled.View`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
  flex-direction: column;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: red;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const ButtonLinkToNewAccount = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: #fff;
  opacity: 0.7;
`;