import React from "react";

import { Container, AvatarImage } from "./styles";

interface Props {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  return (
    <Container>
      <AvatarImage source={{ uri: urlImage }} />
    </Container>
  );
}
