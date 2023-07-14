import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Footer, AboutUs } from "../components";
function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS>
        <>
          <Component {...pageProps} />
          <AboutUs />
          <Footer />
        </>
      </ChakraProvider>
    </>
  );
}

export default App;
