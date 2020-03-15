import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "./config";
import { setStore } from "./store";
import "./index.css";
import { ConnectApp } from "./containers/ConnectApp";

// These are the props that can be passed from the view

export const DemoApp = (props: AppProps = {}): JSX.Element => {
  const store = setStore({
    app: props
  });

  return (
    <Provider store={store}>
      <ConnectApp />
    </Provider>
  );
};

// Main index should be exported as default.
// eslint-disable-next-line
export default DemoApp;
