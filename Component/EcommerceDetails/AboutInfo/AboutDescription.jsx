import { View, Text } from "react-native";
import React from "react";

const AboutDescription = ({ item }) => {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description</Text>
        <Text style={{ color: "gray" }}>{item.rating}</Text>
      </View>
      <Text style={{ color: "gray", marginTop: 10, textAlign: "justify" }}>
        {item.products.description}
      </Text>
    </View>
  );
};

export default AboutDescription;
