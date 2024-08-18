import { Footer, Header } from "./components/server";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";
import { DataFetcher, Overlay, ReduxProvider } from "./components/client";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#FF5B29"
          shadow="0 0 10px #FF5B29,0 0 5px #FF5B29"
          showSpinner={false}
        />
        <ReduxProvider>
          <DataFetcher />
          <Overlay />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
