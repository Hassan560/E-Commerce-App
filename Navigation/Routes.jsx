import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import RootStackScreenNavigation from "./RootStackNavigation";
// import HomeStackNavigation from "./HomeStackNavigation";
import { AuthContext } from "../Context/AuthProvider";
import { auth } from "../Firebase/Firebase";
import DrawerNavigation from "./DrawerNavigation";
// import BottomTabNavigation from "./BottomTabNavigation";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);

  const userHandler = (user) => {
    user ? setUser(user) : setUser(null);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => userHandler(user));
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <DrawerNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
