import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Faisal Pedro",
  description: "Faisal Pedro's personal website and work portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${mono.variable} antialiased font-sans`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
