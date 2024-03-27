import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/partials/footer";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TalkReady",
    description: "TalkReady LTD, learn english with native experts.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
