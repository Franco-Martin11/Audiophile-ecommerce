import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "../styles/theme";
import { store } from "../store";
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
