import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import Footer from "./components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />  {/* Client Component */}
        {children}  {/* Usually Server or Client Components */}
        <Footer />  {/* Client Component */}
      </body>
    </html>
  );
}
