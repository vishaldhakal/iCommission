import { Inter } from "next/font/google";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
