import React from "react";

import { Container, Logo, Content, Icon, UserImage } from "./styles";

import { min_logo } from "../../assets";

export function Header() {
  return (
    <Container>
      <Logo source={min_logo} resizeMode="contain" />
      <Content>
        <UserImage size_userImage={30+20}>
          <Icon name="user" size={30} color="#fff" />
        </UserImage>
      </Content>
    </Container>
  )
}