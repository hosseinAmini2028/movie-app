import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";
import AppProvider from "@/Providers/ContextProvider";
import { Bounce, ToastContainer } from "react-toastify";
import BottomNavigation from "@/components/Layout/BottomNavigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Movie Search app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 antialiased`}
      >
        <AppProvider>
          <ReactQueryProvider>
            <div className="flex min-h-screen pt-20 flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <BottomNavigation />
              <Footer />
            </div>
          </ReactQueryProvider>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </AppProvider>
      </body>
    </html>
  );
}
