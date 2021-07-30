import * as React from "react";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./ui/Main";
import { BrowserRouter } from "react-router-dom";
import { ToastManager } from "./components/Toast";

const App = () => (
  <Provider {...{ store }}>
    <BrowserRouter>
      <ColorModeScript />
      <ToastManager />
      <ChakraProvider {...{theme}}>
        <Main />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
