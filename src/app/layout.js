import Footer from "@/components/commonUI/Footer/Footer";
import "./globals.css";
import Header from "@/components/commonUI/Header/Header";

export const metadata = {
  title: "Club Shawayi",
  description: "Generated by Lunar Enterprises",
  // viewport: "width=device-width, initial-scale=1",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
