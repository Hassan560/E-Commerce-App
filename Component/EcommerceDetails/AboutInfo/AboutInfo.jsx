import { View, Text } from "react-native";
import React from "react";
import COLORS from "../../../Colors";

const AboutInfo = ({item}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", width: 150 }}>
        {item.name}
      </Text>
      <Text
        style={{
          backgroundColor: COLORS.purple,
          fontSize: 18,
          fontWeight: "bold",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 10,
          color: COLORS.yellow,
        }}
      >
        {item.price}
      </Text>
    </View>
  );
};

export default AboutInfo;
