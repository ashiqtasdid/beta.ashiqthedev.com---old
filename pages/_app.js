import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp
