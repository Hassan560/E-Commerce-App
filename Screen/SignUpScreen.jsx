import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import COLORS from "../Colors";
import { FontAwesome, Feather, Ionicons } from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import { AuthContext } from "../Context/AuthProvider";

const SignUpScreen = ({ navigation }) => {
  //  username useState
  const [username, setUsername] = useState("");

  //  email useState
  const [email, setEmail] = useState("");

  // password useState
  const [password, setPassword] = useState("");

  // user register, using with context
  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.signupbackicon}>
        <Ionicons
          name="arrow-back"
          size={30}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.text_header}>Registor Now!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.emailtext}>UserName</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={COLORS.purple} size={20} />
          <TextInput
            placeholder="Your Name"
            autoCapitalize="none"
            autoCorrect={false}
            value={username}
            onChangeText={(event) => setUsername(event)}
            style={styles.textinput_footer}
          />
        </View>
        <Text style={styles.emailtext}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={COLORS.purple} size={20} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(event) => setEmail(event)}
            style={styles.textinput_footer}
          />
        </View>
        <Text style={styles.passwordtext}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={COLORS.purple} size={20} />
          <TextInput
            placeholder="Your Password"
            value={password}
            onChangeText={(event) => setPassword(event)}
            keyboardType="numbers-and-punctuation"
            style={styles.textinput_footer}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <Feather name="eye-off" size={20} color="grey" />
        </View>
        <View style={styles.btn}>
          <Button
            title="Sign Up"
            buttonStyle={styles.elementButton1}
            titleStyle={styles.elementButtonTittle1}
            onPress={() => register(email, password, username)}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4867",
  },
  header: {
    flex: 1.5,
  },
  footer: {
    flex: 4.5,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: COLORS.white,
    paddingVertical: 60,
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
    marginTop: 20,
  },
  elementButton1: {
    backgroundColor: COLORS.purple,
    borderRadius: 10,
  },
  elementButtonTittle1: {
    color: COLORS.yellow,
    fontSize: 18,
    fontWeight: "700",
  },
  signupbackicon: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  emailtext: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
  passwordtext: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
});
