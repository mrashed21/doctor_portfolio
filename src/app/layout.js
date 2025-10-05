import ClientLoaderWrapper from "@/Components/Loader/ClientLoaderWrapper"; // 👈 only this is client-side
import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dr. Ruma Akther",
  description: "Doctor Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ClientLoaderWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientLoaderWrapper>
      </body>
    </html>
  );
}
