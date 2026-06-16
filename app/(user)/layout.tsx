import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best IT Solutions Company in Dubai for Growth & Efficiency | GSIT",
  description: "We are a leading professional IT solutions company in Dubai, offering a wide range of IT services and solutions. Call us for free consultations on IT services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full    " style={{ backgroundColor: '#F6F4F2' }}>
       <div className=" overflow-x-hidden">
         <div className="  flex flex-col mx-4 lg:mx-8 gap-6 md:gap-6.5 lg:gap-8 ">
          <Header />
          {children}
        </div>
       </div>
        <Footer />
        </body>
    </html>
  );
}
