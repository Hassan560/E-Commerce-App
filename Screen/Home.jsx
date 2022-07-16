import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";

import Header from "../Component/Home/Header";
import SearchBar from "../Component/Home/SearchBar";
import CategoriesItems from "../Component/Home/CategoriesItems";
import EcommerceItems from "../Component/Home/EcommerceItems/EcommerceItems";
import EcommerceItemsSearch from "../Component/Home/EcommerceItems/EcommerceItemsSearch";
import { useFocusEffect } from "@react-navigation/native";

import Data from "../Data/ProductData";
import Items from "../Data/CategoriesData";

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'


const Home = ({ navigation }) => {
  // product
  const [product, setProduct] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [focus, setFocus] = useState(false);
  // categories
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productCtg, setProductCtg] = useState([]);

  // get data from firebase firestore
  const getData = async () => {
    const data = await getDocs(collection(db, "products"))
    setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setProductCtg(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setProductFilter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setInitialState(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useFocusEffect(
    React.useCallback(() => {
      getData();
      // setProductFilter(getData());
      setFocus(false);
      setCategories(Items);
      setActiveTab(-1);
      // setInitialState(getData());
      // setProductCtg(getData());

      return () => {
        // getData()
        // setProduct([]);
        // setProductFilter([]);
        setFocus();
        setCategories([]);
        setActiveTab();
        // setInitialState();
      };
    }, [])
  );

  // ProductFilter
  const searchProduct = (text) => {
    setProductFilter(
      product.filter((index) =>
        index.products.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openItems = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  // categoriesFilter
  const chageCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductCtg(initialState), setActiveTab(true)]
        : [
          setProductCtg(product.filter((index) => index.products.category === ctg)),
          setActiveTab(true),
        ];
    }
  };

  return (
    <>
      <View style={styles.homeContainer}>
        <View style={{ paddingVertical: 5 }}>
          <StatusBar backgroundColor="#F6F6F6" barStyle={"dark-content"} />
          <Header navigation={navigation} />
          <SearchBar
            searchProduct={searchProduct}
            openItems={openItems}
            focus={focus}
            onBlur={onBlur}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <CategoriesItems
            categories={categories}
            changeCatg={chageCtg}
            productCtg={productCtg}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {productCtg.length > 0 ? (
            <>
              {focus == true ? (
                <EcommerceItemsSearch
                  productFilter={productFilter}
                  navigation={navigation}
                />
              ) : (
                <EcommerceItems
                  navigation={navigation}
                  product={product}
                  productCtg={productCtg}
                  setProduct={setProduct}
                />
              )}
            </>
          ) : (
            <View style={styles.textcontainer}>
              <Text style={styles.nofoundtext}>No product found</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#F6F6F6",
    flex: 1,
    paddingHorizontal: 20,
  },
  nofoundtext: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center'
  },
  textcontainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
