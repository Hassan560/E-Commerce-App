import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import COLORS from "../../../Colors";

const { height } = Dimensions.get("window");

const EcommerceItemsSearch = ({ productFilter, navigation }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      {productFilter.length > 0 ? (
        productFilter.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("EcommerceDetails", item)}
          >
            <View key={index} style={styles.container}>
              <Image
                source={{uri: item.products.imageUrl}}
                style={{ width: 100, height: 100 }}
                o
              />
              <View style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>{item.products.name}</Text>
                <Text>{item.products.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.nofound}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            No match found
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    paddingLeft: 10,
  },
  nofound: {
    height: height / 3 - 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default EcommerceItemsSearch;
