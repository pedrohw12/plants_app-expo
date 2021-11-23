import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import SetName from "../pages/SetName";
import Profile from "../pages/Profile";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="SetName" component={SetName} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
