import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

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
        <h2>Nav</h2>
        {children}
      </body>
    </html>
  );
}
