import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import COLORS from "../../../Colors";

//react-redux
import { connect } from "react-redux";
import * as action from "../../../Redux/Action/CartAction";

const EcommerceItemsInfo = (props) => {
  const { name, price, rating,image_url } = props;

  return (
    <View style={styles.ecommerceInfo}>
      <View style={{ justifyContent: "space-between" }}>
        <Text style={styles.ecommerceInfoName}>{name}</Text>
        <Text style={{ fontWeight: "600" }}>{price}</Text>
      </View>
      <View>
        <Text style={styles.ecommerceInfoRating}>{rating}</Text>
        <TouchableOpacity
          style={styles.ecommerceIcon}
          onPress={() => props.addItemsToCart(props)}
        >
          <Entypo name="plus" size={20} color={COLORS.yellow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemsToCart: (product) =>
      dispatch(action.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(EcommerceItemsInfo);

const styles = StyleSheet.create({
  ecommerceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ecommerceIcon: {
    backgroundColor: COLORS.purple,
    borderRadius: 50,
    width: 30,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 3,
    paddingVertical: 4,
    marginTop: 5,
    marginLeft: 10,
  },
  ecommerceInfoName: {
    fontSize: 14,
    fontWeight: "bold",
    width: 90,
  },
  ecommerceInfoRating: {
    fontSize: 10,
    color: "gray",
  },
});
