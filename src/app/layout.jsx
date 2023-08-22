import "./globals.css";
import { Poppins, Abril_Fatface, Raleway } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});
const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-abril",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata = {
  title: "Akshit Aryan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${abril.variable} ${raleway.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
