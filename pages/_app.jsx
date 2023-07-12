"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Footer, AboutUs } from "../components";
import StoreProvider from "../store/storeProvider";
function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <StoreProvider>
      {" "}
      <ChakraProvider theme={theme} resetCSS>
        <>
          <Component {...pageProps} />
          <AboutUs />
          <Footer />
        </>
      </ChakraProvider>
    </StoreProvider>
  );
}

export default App;
