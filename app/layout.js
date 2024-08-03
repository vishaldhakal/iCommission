import { Inter } from "next/font/google";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iCommission | Best Commission Advance Company For Realtors",
  description:
    "Are you tired of waiting for your commission payouts? iCommission provides reliable & fast commission advance services to real estate agents & brokers.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
