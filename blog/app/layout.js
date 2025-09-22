import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "app/components/footer";
import Header from "app/components/header";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
