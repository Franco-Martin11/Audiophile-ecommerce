// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="description" content="Explora la mejor selección de altavoces, auriculares, amplificadores y más en Audiophile. Eleva tu experiencia musical con nuestros componentes de sonido de vanguardia. ¡Descubre la calidad del sonido como nunca antes!" />
        <meta name="keywords" content="Audiophile, componentes de sonido, altavoces, auriculares, amplificadores, calidad del sonido, experiencia musical, sound components, loudspeakers, headphones, amplifiers, sound quality, music experience" />
        <meta name="author" content="Franco Martin" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="canonical" href="https://audiophile-ecommerce-pearl.vercel.app/" />

        <meta property="og:title" content="Audiophile - Componentes de Sonido de Alta Calidad" />
        <meta property="og:description" content="Explora la mejor selección de altavoces, auriculares, amplificadores y más en Audiophile. Eleva tu experiencia musical con nuestros componentes de sonido de vanguardia. ¡Descubre la calidad del sonido como nunca antes!" />
        <meta property="og:image" content="/HomeOG.webp" />
        <meta property="og:url" content="https://audiophile-ecommerce-pearl.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon-32x32px.png" sizes="any" />
      </Head>
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
