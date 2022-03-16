import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import COLORS from "../../Colors";

export default function CategoriesItems(props) {
  const { categories, changeCatg, productCtg, activeTab, setActiveTab } = props;
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          margin: 0,
          padding: 0,
          borderRadius: 0,
          paddingHorizontal: 10,
          paddingVertical: 15,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          key={1}
          onPress={() => {
            changeCatg("all"), setActiveTab(-1);
          }}
        >
          <View
            style={[
              styles.badge,
              activeTab == -1 ? styles.active : styles.inactive,
            ]}
          >
            <Text
              style={{ color: COLORS.yellow, fontSize: 15, fontWeight: "bold" }}
            >
              All
            </Text>
          </View>
        </TouchableOpacity>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.title}
            onPress={() => {
              changeCatg(item.title), setActiveTab(categories.indexOf(item));
            }}
          >
            <View
              style={[
                styles.badge,
                activeTab == categories.indexOf(item)
                  ? styles.active
                  : styles.inactive,
              ]}
            >
              <Text
                style={[
                  activeTab == categories.indexOf(item)
                    ? styles.active
                    : styles.inactive,
                  { fontWeight: "bold", fontSize: 15 },
                ]}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: COLORS.purple,
    borderRadius: 10,
    marginRight: 12,
    padding: 10,
  },
  active: {
    backgroundColor: COLORS.purple,
    color: COLORS.yellow,
  },
  inactive: {
    backgroundColor: COLORS.white,
    color: "black",
  },
});
