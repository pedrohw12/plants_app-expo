import React from "react";
import { Text } from "react-native";
import {
  Container,
  Content,
  Description,
  Header,
  List,
  ListItem,
  Title,
} from "./styles";

import server from "../../server.json";

const Profile = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Olá,{`\n`}Tiago</Title>
          <Title>T</Title>
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
            <ListItem>
              <Text key={enviro.key}>{enviro.title}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Profile;
