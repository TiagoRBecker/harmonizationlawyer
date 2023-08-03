import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav/index";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/Context/index";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
      <CartProvider>
        <Nav />

      { children }
        <Footer />
      </CartProvider>
      </body>
    </html>
  );
}
