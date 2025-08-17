import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JH Mural Project",
  description:
    "We collaborate with independent artists, paint murals, and create an outdoor art gallery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yvy5tmy.css" />
      </head>
      <body>
        <Navbar />
        <main className="pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
