import { Inter } from "next/font/google";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iCommission Advance - Unlock Your Earnings with iCommission Advance",
  description:
    "Are you tired of waiting for your commission payouts? With iCommission, you can access your hard-earned money immediately! Join our waitlist today and get a $25 Amazon Gift Card upon your first successful iCommission Advance!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
