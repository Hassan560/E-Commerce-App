import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import COLORS from "../../../Colors";

const EcommerceItemsImage = ({ image }) => {
  return (
    <>
      <Image source={{uri: image}} style={styles.image} />
      <TouchableOpacity style={styles.heartIcon}>
        <Entypo name="heart" color={COLORS.white} size={15} />
      </TouchableOpacity>
    </>
  );
};

export default EcommerceItemsImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: COLORS.orange,
    borderRadius: 50,
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
});
