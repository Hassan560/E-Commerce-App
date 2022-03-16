import { View,StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../Colors";
import AddCart from "./AddCart";
import { Ionicons, Fontisto } from "react-native-vector-icons";
import AboutImage from "./AboutInfo/AboutImage";
import AboutInfo from "./AboutInfo/AboutInfo";
import AboutDescription from "./AboutInfo/AboutDescription";

const About = ({ route, navigation }) => {
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Fontisto name="opencart" size={24} />
      </View>
      <View style={styles.content}>
        <AboutImage item={item} />
        <View style={{ marginTop: 5 }}>
          <AboutInfo item={item} />
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <AboutDescription item={item} />
      </View>
      <View style={styles.footer}>
        <AddCart />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingVertical: 5,
  },
  header: {
    // flex: 0.4,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  content: {
    flex: 2.1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 350,
    alignSelf: "center",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "gray",
    marginTop: 10,
  },
  footer: {
    flex: 0.8,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
