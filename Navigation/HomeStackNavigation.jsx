import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screen/Home";
import EcommerceDetails from "../Screen/EcommerceDetails";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="EcommerceDetails" component={EcommerceDetails} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
