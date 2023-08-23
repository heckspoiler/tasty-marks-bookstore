import styles from "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Tasty Marks Bookstore",
  description: "Design Books for Designers, Historians and Pretenders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <section className="section-main">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
