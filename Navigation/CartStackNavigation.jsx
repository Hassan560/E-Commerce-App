import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Cart from "../Screen/Cart/Cart";
import CheckoutTabNavigation from "./CheckoutTabNavigation";

const CartStack = createNativeStackNavigator();

const CartStackNavigation = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={CheckoutTabNavigation} />
    </CartStack.Navigator>
  );
};
export default CartStackNavigation;
