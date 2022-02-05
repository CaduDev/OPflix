import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import { 
  Container, 
  Pelicula, 
  Background, 
  ContentForm,
  ButtonLogin,
  Title,
  ButtonLinkToNewAccount,
  Text
} from './styled';

import { InputText } from '../../components/InputText';

import { backgroud_SingIn } from '../../assets';

export function SingIn({ navigation }: any) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Container>
      <Background source={backgroud_SingIn} />
      <Pelicula />
      <ContentForm>
        <InputText
          label="E-mail"
          placeholder="Digita aqui seu e-mail"
        />
        <InputText
          label="Senha"
          placeholder="Digita aqui seu e-mail"
          protect={true}
        />
        <ButtonLogin
          onPress={() => {
            setLoading(true);

            setTimeout(() => {
              navigation.navigate('Feed')
            }, 5000)
          }}
        >
        {loading ? (
            <ActivityIndicator color={"#fff"} />
          ): (
            <Title>Acessar</Title>
          )
        }
        </ButtonLogin>
        <ButtonLinkToNewAccount>
          <Text>
            Ainda não tem uma conta clique Aqui
          </Text>
        </ButtonLinkToNewAccount>
      </ContentForm>
    </Container>
  )
}