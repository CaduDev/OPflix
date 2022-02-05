import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  position: relative;
  padding: 5px;
  border-color: #fff;
  border-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 4px;
`;

export const TextInput = styled.TextInput`
  width: 99%;
  height: 88%;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
`;

export const Label = styled.Text`
  position: absolute;
  top: -12px;
  left: 10px;
  color: #fff;
  background: #000;
  padding: 0px 4px;
`;
