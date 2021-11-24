import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BtnText,
  ButtonContainer,
  ConfirmButton,
  Container,
  Content,
  Description,
  Emoji,
  Input,
  Title,
} from "./styles";

const SetName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleChange(txt) {
    setName(txt);
  }

  function handleConfirm() {
    if (!name) return;
    setIsConfirmed(true);
    if (isConfirmed) navigation.navigate("Profile", { name });
  }

  return (
    <Container>
      <Content>
        <Emoji big={isConfirmed}>😀</Emoji>
        <Title isConfirmed={isConfirmed}>
          {isConfirmed ? "Prontinho" : `Como podemos${`\n`}chamar você?`}
        </Title>
        {isConfirmed ? (
          <Description isConfirmed={isConfirmed}>
            Agora vamos começar a cuidar das suas{`\n`}plantinhas com muito
            cuidado.
          </Description>
        ) : (
          <Input
            onChangeText={(txt) => handleChange(txt)}
            placeholder="Digite um nome"
          />
        )}
        <ButtonContainer style={{ opacity: name.length > 1 ? 1 : 0.5 }}>
          <ConfirmButton isConfirmed={isConfirmed} onPress={handleConfirm}>
            <BtnText>{isConfirmed ? "Começar" : "Confirmar"}</BtnText>
          </ConfirmButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default SetName;
