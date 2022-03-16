import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import COLORS from "../../Colors";

const AddCart = () => {
  return (
    <View style={styles.addcartContainer}>
      <View style={styles.addcartHeader}>
        <Text>- 02 +</Text>
        <Text>Total: Rs40000</Text>
      </View>
      <View style={styles.addcartFooter}>
        <Button
          title="Add to cart"
          buttonStyle={styles.addcartButton}
          titleStyle={styles.addcartButtonTitle}
          onPress={() => Alert.alert("hello")}
        />
      </View>
    </View>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  addcartButton: {
    backgroundColor: COLORS.purple,
    borderRadius: 10,
  },
  addcartButtonTitle: {
    color: COLORS.yellow,
    fontSize: 18,
    fontWeight: "700",
  },
  addcartContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  addcartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addcartFooter: {
    paddingTop: 30,
  },
});
