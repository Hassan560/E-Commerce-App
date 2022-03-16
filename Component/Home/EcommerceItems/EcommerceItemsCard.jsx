import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import EcommerceItemsImage from "./EcommerceItemsImage";
import EcommerceItemsInfo from "./EcommerceItemsInfo";
import COLORS from "../../../Colors";

const { width, height } = Dimensions.get("screen");

const EcommerceItemsCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EcommerceDetails", item)}
    >
      <View>
        <View style={styles.ecommerceItemsContainer}>
          <EcommerceItemsImage
            image={
              item.image_url
                ? item.image_url
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDWLUjxsdUpWjjhXkNZVtpLowo5NlX8BEW6Q72IvLkLBApDrdYGBIkKWEd6u2sahsTtc&usqp=CAU"
            }
          />
          <EcommerceItemsInfo
            name={item.name}
            price={item.price}
            rating={item.rating}
            image_url={item.image_url}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EcommerceItemsCard;

const styles = StyleSheet.create({
  ecommerceItemsContainer: {
    backgroundColor: COLORS.white,
    width: width / 2.5 - 5,
    marginTop: 15,
    padding: 12,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "gray",
  },
});
