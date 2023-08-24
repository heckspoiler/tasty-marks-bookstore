import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Tasty Marks Bookstore",
  description: "Design Books for Designers, Historians and Pretenders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spacegrotesk.className}>
        <NavBar />
        <section className="section-main">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
