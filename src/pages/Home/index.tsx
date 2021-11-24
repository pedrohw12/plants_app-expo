import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Text } from "react-native";

import Watering from "../../assets/watering.png";
import {
  Container,
  Content,
  Title,
  StyledImage,
  Description,
  NextButton,
} from "./styles";

const Home = () => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('SetName')
  }

  return (
    <Container>
      <Content>
        <Title>
          Gerencie{`\n`}suas plantas de{`\n`}forma fácil
        </Title>
        <StyledImage source={Watering} />
        <Description>
          Não esqueça mais de regar suas{`\n`}plantas. Nós cuidamos de lembrar
          você{`\n`}
          sempre que precisar.
        </Description>
        <NextButton onPress={handleNavigate} activeOpacity={0.7}>
        <AntDesign name="right" size={24} color="white" />
        </NextButton>
      </Content>
    </Container>
  );
};

export default Home;
