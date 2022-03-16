import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import COLORS from "../Colors";
import { Button } from "react-native-elements";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="2000"
          source={require("../assets/SplashImage/shopping.png")}
          style={{ width: 400, height: 300 }}
          resizeMode="center"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.btn}>
          <Button
            title="Get Started"
            buttonStyle={styles.elementButton}
            titleStyle={styles.elementButtonTittle}
            onPress={() => navigation.replace("LoginScreen")}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.purple,
  },
  text: {
    fontSize: 18,
    color: "gray",
  },
  btn: {
    width: 200,
    alignSelf: "flex-end",
    marginTop: 50,
  },
  elementButton: {
    backgroundColor: COLORS.purple,
    borderRadius: 10,
  },
  elementButtonTittle: {
    color: COLORS.yellow,
    fontSize: 18,
    fontWeight: "600",
  },
});
