import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  fallback: [
    'Inter', 
    '-apple-system', 
    'BlinkMacSystemFont',
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'sans-serif'
  ],
});

export const metadata: Metadata = {
  title: "Dev Piyal",
  description: "Dev Piyal's Portfolio",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased bg-[#F6F6F8]`}
      >
        {children}
      </body>
    </html>
  );
}
