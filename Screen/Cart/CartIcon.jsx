import React from "react";
import { StyleSheet, Text } from "react-native";
import { Badge } from "react-native-elements";
import COLORS from "../../Colors";

import { connect } from "react-redux";

const CartIcon = (props) => {
  return (
    <>
      {props.CartReducer.length ? (
        <Badge
          status="error"
          value={props.CartReducer.length}
          containerStyle={styles.carticonbadge}
          badgeStyle={{ backgroundColor: COLORS.orange }}
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { CartReducer } = state;
  return {
    CartReducer: CartReducer,
  };
};

const styles = StyleSheet.create({
  carticonbadge: {
    position: "absolute",
    left: 15,
    bottom: 13,
    fontSize: 25,
  },
});

export default connect(mapStateToProps)(CartIcon);
