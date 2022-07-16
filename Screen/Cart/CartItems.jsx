import { View, Text, StyleSheet } from "react-native";

import { Avatar } from "react-native-elements";

const CartItems = ({ item }) => {
  return (  
    <View style={styles.cartcontainer}>
      <Avatar rounded size={85} source={{uri: item.item.imageUrl}} />
      <View style={{ flexDirection: "row", flex: 0.8 }}>
        <Text style={styles.name}>{item.item.name}</Text>
      </View>
      <View>
        <Text style={styles.price}>{item.item.price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cartcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
  },
});
export default CartItems;
