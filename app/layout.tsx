import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "JBU Association | Bridging People to Jesus Across Nations",
    description: "JBU Association is a mission community dedicated to prayer, discipleship, leadership development, and global mission.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
          <html lang="en" className="scroll-smooth">
                <body className="min-h-full flex flex-col antialiased">
                        <Navbar />
                        <main className="flex-1">{children}</main>main>
                        <Footer />
                </body>body>
          </html>html>
        );
}</html>
