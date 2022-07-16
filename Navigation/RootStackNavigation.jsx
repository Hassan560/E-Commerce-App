import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../Screen/SplashScreen";
import LoginScreen from "../Screen/LoginScreen";
import SignUpScreen from "../Screen/SignUpScreen";

import { StatusBar } from "react-native";

import COLORS from "../Colors";

const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.purple} />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackNavigation;
