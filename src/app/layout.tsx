import "~/styles/globals.css";

import { Inter } from "next/font/google";

import type { Metadata } from "next";

interface Properties {
    children: React.ReactNode;
}

const INTER = Inter({
    subsets: ["latin"],
    display: "swap",
});
export const metadata: Metadata = {
    title: "Next App Boilerplate",
    description: "WIP",
};

export default function RootLayout(props: Properties) {
    return (
        <html className={INTER.className} lang="en">
            <body>{props.children}</body>
        </html>
    );
}

