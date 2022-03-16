import React from "react";

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

import { Button } from "react-native-elements";

import COLORS from "../../Colors";

//redux
import { connect } from "react-redux";

// actions
import * as action from "../../Redux/Action/CartAction";

//swipelistview
import { SwipeListView } from "react-native-swipe-list-view";

// dimensions
const { height, width } = Dimensions.get("window");

import CartItems from "./CartItems";

import { Ionicons } from "react-native-vector-icons";

const Cart = (props) => {

  const total = props.CartReducer.map((item) =>
    Number(item.product.price.replace("Rs:", ""))
  ).reduce((prev, curr) => prev + curr, 0);

  // const totalRs = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "PKR",
  // });

  return (
    <>
      {props.CartReducer.length ? (
        <View style={{ flex: 1 }}>
          <ScrollView style={{ marginBottom: 50 }}>
            <SwipeListView
              data={props.CartReducer}
              renderItem={(data) => <CartItems item={data} />}
              renderHiddenItem={(data) => (
                <View style={styles.hiddenContainer}>
                  <TouchableOpacity
                    style={styles.hiddenButton}
                    onPress={() => props.removeFromCart(data.item)}
                  >
                    <Ionicons name="trash" size={30} color={"white"} />
                  </TouchableOpacity>
                </View>
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
              stopLeftSwipe={75}
              disableRightSwipe={true}
              previewOpenDelay={3000}
              friction={1000}
              tension={40}
              keyExtractor={(data) => data.id}
            />
          </ScrollView>
          <View style={styles.bottomcontainer}>
            <View style={styles.bottomContent}>
              <View>
                <Text style={styles.totalprice}>Total: {total}</Text>
              </View>
              <TouchableOpacity onPress={() => props.clearCart()}>
                <Text style={styles.clear}>Clear</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 30 }}>
              <Button
                title="Checkout"
                buttonStyle={styles.cartButton}
                titleStyle={styles.cartButtonTitle}
                onPress={() => props.navigation.navigate("Checkout")}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.emptyview}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Looks like your cart is empty
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Add products to your cart to get started
          </Text>
        </View>
      )}
    </>
  );
};

// get data from redux store
const mapStateToProps = (state) => {
  const { CartReducer } = state;
  return {
    CartReducer: CartReducer,
  };
};

//sends data to the redux store
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(action.clearCart()),
    removeFromCart: (item) => dispatch(action.removeFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// styling...
const styles = StyleSheet.create({
  emptyview: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: 155,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cartButton: {
    backgroundColor: COLORS.purple,
    borderRadius: 10,
  },
  cartButtonTitle: {
    color: COLORS.yellow,
    fontSize: 18,
    fontWeight: "700",
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.purple,
  },
  totalprice: {
    fontSize: 18,
    color: COLORS.purple,
    fontWeight: "bold",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.purple,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clear: {
    color: COLORS.purple,
    fontSize: 17,
    fontWeight: "bold",
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 10,
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: "100%",
    borderRadius: 20,
    width: width / 1.2,
  },
});
