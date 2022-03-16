import React from "react";
import Providers from "./Navigation/Index";

//redux
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Providers />
      </Provider>
    </>
  );
}

export default App;
