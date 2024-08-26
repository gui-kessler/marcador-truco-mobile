import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, Theme } from "@react-navigation/native";

import Truco from "./pages/Truco";
import Canastra from "./pages/Canastra";
import Home from "./pages/Home";

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Truco" component={Truco} />
        <Drawer.Screen name="Canastra" component={Canastra} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
