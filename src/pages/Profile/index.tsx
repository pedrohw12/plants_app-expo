import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Description,
  Header,
  List,
  ListItem,
  Title,
  SubTitle,
  ListItemText,
} from "./styles";

import server from "../../server.json";
import { Avatar } from "../../components/Avatar";

const Profile = ({ route }) => {
  const [selectedEnv, setSelectedEnv] = useState("");

  function handleSelectEnv(enviroKey) {
    setSelectedEnv(enviroKey);
  }

  return (
    <Container>
      <Content>
        <Header>
          <View>
            <Title>Olá,</Title>
            <SubTitle>{route.params.name}</SubTitle>
          </View>
          <Avatar urlImage="https://avatars.githubusercontent.com/u/91907545?s=40&v=4" />
        </Header>
        <Description>
          Em qual ambiente{`\n`}você quer colocar sua planta?
        </Description>
        <List
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 40 }}
        >
          {server.plants_environments.map((enviro) => (
            <ListItem
              isSelected={selectedEnv === enviro.key}
              onPress={() => handleSelectEnv(enviro.key)}
              key={enviro.key}
            >
              <ListItemText isSelected={selectedEnv === enviro.key}>
                {enviro.title}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Profile;
