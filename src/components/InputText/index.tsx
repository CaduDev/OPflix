import React from 'react';

import { Container, TextInput, Label } from './styles';

interface InputText {
  label: string,
  placeholder: string;
  placeholderTextColor?: string;
  protect?: boolean,
}

export function InputText({ placeholder, placeholderTextColor, protect, label }: InputText) {
  return ( 
    <Container>
      <Label>{label}</Label>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={protect}
        placeholderTextColor={placeholderTextColor|| "#666"}
      />
    </Container>
  );
}