// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {/* gives padding to all elements */}
        <Header/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
