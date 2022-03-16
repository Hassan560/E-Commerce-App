import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import COLORS from "../Colors";
import { FontAwesome, Feather } from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import { AuthContext } from "../Context/AuthProvider";

const LoginScreen = ({ navigation }) => {
  //  email useState
  const [email, setEmail] = useState("");
  // password useState
  const [password, setPassword] = useState("");
  // user register, using with context
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.loginemail}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={COLORS.purple} size={20} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textinput_footer}
            value={email}
            onChangeText={(event) => setEmail(event)}
          />
        </View>
        <Text style={styles.loginpassword}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={COLORS.purple} size={20} />
          <TextInput
            placeholder="Your Password"
            keyboardType="numbers-and-punctuation"
            style={styles.textinput_footer}
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={(event) => setPassword(event)}
          />
          <Feather name="eye-off" size={20} color="grey" />
        </View>
        <View style={styles.btn}>
          <Button
            title="Sign In"
            buttonStyle={styles.elementButton1}
            titleStyle={styles.elementButtonTittle1}
            onPress={() => login(email, password)}
          />
        </View>
        <View style={styles.btn2}>
          <Text style={styles.btn2text}>Don't have an account?</Text>
          <Button
            title="Sign Up"
            buttonStyle={styles.elementButton2}
            titleStyle={styles.elementButtonTittle2}
            onPress={() => navigation.navigate("SignUpScreen")}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4867",
  },
  header: {
    flex: 1.5,
  },
  footer: {
    flex: 4,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: COLORS.white,
    paddingVertical: 80,
    paddingHorizontal: 40,
    fontSize: 30,
  },
  textinput_footer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#d7d7d7",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    marginTop: 50,
  },
  btn2: {
    marginTop: 10,
  },
  elementButton1: {
    backgroundColor: COLORS.purple,
    borderRadius: 10,
  },
  elementButton2: {
    backgroundColor: null,
    borderRadius: 10,
    borderColor: COLORS.yellow,
    borderWidth: 3,
  },
  elementButtonTittle1: {
    color: COLORS.yellow,
    fontSize: 18,
    fontWeight: "700",
  },
  elementButtonTittle2: {
    color: COLORS.purple,
    fontSize: 18,
    fontWeight: "700",
  },
  loginemail: {
    fontWeight: "bold",
    fontSize: 17,
  },
  loginpassword: {
    marginTop: 35,
    fontWeight: "bold",
    fontSize: 17,
  },
  btn2text: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.purple,
    marginBottom: 10,
  },
});
