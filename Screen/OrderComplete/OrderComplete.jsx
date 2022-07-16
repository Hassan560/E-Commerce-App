import { View, Text } from 'react-native'
import React from 'react'

import LottieView from 'lottie-react-native'

import { connect } from 'react-redux';

const OrderComplete = (props) => {

  const total = props.CartReducer.map((item) =>
    Number(item.price.replace("Rs:", ""))
  ).reduce((prev, curr) => prev + curr, 0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView
        style={{ height: 100, alignSelf: 'center', marginBottom: 5 }}
        source={require("../../assets/Animation/1798-check-animation.json")}
        autoPlay
        loop={false}
        speed={0.5}
      />
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Your order successfully completed Rs:{total}</Text>
      <LottieView
        style={{ height: 250, alignSelf: 'center' }}
        source={require("../../assets/Animation/75321-esvin-aragon-delivery-color-change.json")}
        autoPlay
        speed={0.5}
      />
    </View>
  )
}

const mapStateToProps = (state) => {
  const { CartReducer } = state;
  return {
    CartReducer: CartReducer
  }
}

export default connect(mapStateToProps, null)(OrderComplete)