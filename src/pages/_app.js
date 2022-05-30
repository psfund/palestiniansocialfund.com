import { appWithTranslation } from "next-i18next";
import "src/styles/globals.css";
import "react-image-lightbox/style.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
