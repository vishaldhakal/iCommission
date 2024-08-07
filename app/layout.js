import { Inter } from "next/font/google";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
