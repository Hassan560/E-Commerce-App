import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import COLORS from "../../../Colors";

const AboutImage = ({item}) => {
  return (
    <>
      <Image
        source={{uri: item.products.imageUrl}}
        style={{
          resizeMode: "cover",
          width: "100%",
          flex: 1,
          borderRadius: 10,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 16,
          right: 15,
          backgroundColor: COLORS.orange,
          borderRadius: 50,
          paddingHorizontal: 6,
          paddingVertical: 5,
        }}
      >
        <Entypo name="heart" color={COLORS.white} size={20} />
      </TouchableOpacity>
    </>
  );
};

export default AboutImage;
