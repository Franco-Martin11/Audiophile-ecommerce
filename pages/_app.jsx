'use client'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "../styles/theme";
import { store } from "../store";
import { Footer, AboutUs } from "../components";
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS>
        <>
          <Component {...pageProps} />
          <AboutUs />
          <Footer />
        </>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
