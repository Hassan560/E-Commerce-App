import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNavigation";
import { Foundation, FontAwesome5, Ionicons } from "react-native-vector-icons";
import { View } from "react-native";

import Profile from "../Screen/Profile";
import Setting from "../Screen/Setting";
import CartStackNavigation from "./CartStackNavigation";

import CartIcon from "../Screen/Cart/CartIcon";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4D4867",
        tabBarInactiveTintColor: "#dfdfdf",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={25} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="CartStack"
        component={CartStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome5 name="shopping-bag" size={25} color={color} />
              <CartIcon />
            </View>
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={25} color={color} />
          ),
        }}
      /> */}
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={20} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
