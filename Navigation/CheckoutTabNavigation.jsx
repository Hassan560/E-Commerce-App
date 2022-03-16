import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Payment from "../Screen/Checkout/Payment";
import Checkout from "../Screen/Checkout/Checkout";
import Confirm from "../Screen/Checkout/Confirm";

const Tab = createMaterialTopTabNavigator();

const CheckoutTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
};

export default CheckoutTabNavigation;
