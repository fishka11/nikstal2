const { library, config } = require("@fortawesome/fontawesome-svg-core"); // Eliminates hydration error
// import { library, config } from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import RootLayout from "@/layouts/rootLayout";

config.autoAddCss = false;
library.add(fas);

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  preload: true,
  display: "block",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
