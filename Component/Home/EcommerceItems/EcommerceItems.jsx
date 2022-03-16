import { ScrollView } from "react-native";
import React, { useEffect } from "react";
import EcommerceItemsCard from "./EcommerceItemsCard";
import { View } from "react-native-animatable";

const EcommerceItems = ({ navigation, productCtg }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        {productCtg.map((item, index) => (
          <EcommerceItemsCard item={item} key={index} navigation={navigation} />
        ))}
      </View>
    </>
  );
};

export default EcommerceItems;
