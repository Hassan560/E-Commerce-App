import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { EvilIcons } from "react-native-vector-icons";

export default function SearchBar({ searchProduct, openItems, focus, onBlur, }) {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={{ marginRight: 5 }}>
        <EvilIcons name="search" size={30} style={{ fontWeight: "bold" }} />
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onPressIn={openItems}
        onChangeText={(text) => searchProduct(text)}
      />
      <TouchableOpacity onPressOut={onBlur} onPress={() => Keyboard.dismiss()}>
        {focus == true ? <EvilIcons name="close" size={30} /> : null}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#ecebeb",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
});
