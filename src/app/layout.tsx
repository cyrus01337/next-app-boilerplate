import "~/styles/globals.css";

import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

interface Properties {
    children: ReactNode;
}

const INTER = Inter({
    display: "swap",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    description: "WIP",
    title: "Next App Boilerplate",
};

export default function RootLayout(properties: Properties) {
    return (
        <html className={INTER.className} lang="en">
            <body>{properties.children}</body>
        </html>
    );
}
