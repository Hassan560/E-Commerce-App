import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome5 } from "react-native-vector-icons";
import { Badge } from "react-native-elements";
import COLORS from "../../Colors";

import { connect } from "react-redux";

function Header({ navigation, CartReducer }) {
  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons
            name="menu"
            size={30}
            style={{ color: COLORS.purple }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.8 }}>
        <Text>Ecommerce App</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <FontAwesome5
            name="shopping-bag"
            size={25}
            style={{ color: COLORS.purple }}
          />
          <>
            {CartReducer.length ? (
              <Badge
                value={CartReducer.length}
                containerStyle={styles.badgeStyle}
                badgeStyle={{ backgroundColor: COLORS.orange }}
              />
            ) : null}
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { CartReducer } = state;
  return {
    CartReducer: CartReducer,
  };
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  badgeStyle: {
    position: "absolute",
    left: 15,
    bottom: 13,
    fontSize: 25,
  },
});

export default connect(mapStateToProps)(Header);
