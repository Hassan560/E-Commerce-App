import { View, StyleSheet } from "react-native";
import React from "react";
import About from "../Component/EcommerceDetails/About";

const EcommerceDetails = ({ navigation,route }) => {
  return (
    <View style={styles.container}>
      <About route={route} navigation={navigation}/>
    </View>
  );
};

export default EcommerceDetails;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
});
