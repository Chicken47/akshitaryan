import "./globals.css";
import {
  Poppins,
  Abril_Fatface,
  Raleway,
  Alegreya_Sans,
  Oswald,
  Tilt_Prism,
} from "next/font/google";

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
const tilt = Tilt_Prism({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-tilt",
});

const aleg = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-alegreya",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata = {
  title: "Aryanator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${abril.variable} ${aleg.variable}${oswald.variable} ${tilt.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
