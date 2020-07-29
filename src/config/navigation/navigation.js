import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ScreenOne, ScreenTwo } from "../../screens";

import Menu from "../../components/myDrawer/drawer";
import { MainHeader } from "../../components";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// HomeScreen

function ScreenOneStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        options={{
          headerShown: false,
        }}
        component={ScreenOne}
      />
    </Stack.Navigator>
  );
}

function ScreenTwoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen2"
        options={{
          headerShown: false,
        }}
        component={ScreenTwo}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Screen1"
      drawerContent={(props) => <Menu {...props} />}
    >
      <Drawer.Screen name="Screen1" component={ScreenOneStack} />
      <Drawer.Screen name="Screen2" component={ScreenTwoStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="App"
          component={MyDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
