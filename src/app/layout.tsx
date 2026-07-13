import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

export const metadata = {
  title: "JH Mural Project",
  description:
    "We collaborate with independent artists, paint murals, and create an outdoor art gallery.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/yvy5tmy.css" />
      </head>
      <body>
        <MotionProvider>
          <Navbar />
          <MobileNavbar />
          <main className="pt-[80px]">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
