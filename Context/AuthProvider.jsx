import { NavigationRouteContext } from "@react-navigation/native";
import React, { createContext, useState } from "react";
import { auth, db } from "../Firebase/Firebase";
import { Alert } from "react-native";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth.signInWithEmailAndPassword(email, password);
            Alert.alert("🔥 User Login Successfully  ✅");
          } catch (error) {
            Alert.alert(
              " 🔥 !Ooops...",
              error.message
              // error.message + `\n\n... What would you like to do next`,
              // [
              //   {
              //     text: "Ok",
              //     onPress: () => console.log("Ok"),
              //     style: "cancel",
              //   },
              //   {
              //     text: "Sign Up",
              //     onPress: () => console.log('okk')
              //   },
              // ]
            );
          }
        },
        register: async (email, password, username) => {
          try {
            const authUser = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
            // Alert.alert("🔥 User successfully Registerd ✅");

            await db.collection("users").add({
              owner_uid: authUser.user.uid,
              username: username,
              email: authUser.user.email,
            });
            
          } catch (error) {
            Alert.alert(" 🔥 !Ooops...", error.message);
          }
        },
        logout: async () => {
          try {
            await auth.signOut();
          } catch (error) {
            Alert.alert(error.message);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
