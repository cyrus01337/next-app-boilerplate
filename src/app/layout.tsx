import "~/styles/globals.css";

import { Inter } from "next/font/google";

import type { Metadata, NextPage } from "next";

const INTER = Inter({
    display: "swap",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    description: "WIP",
    title: "Next App Boilerplate",
};

const RootLayout: NextPage<LayoutProps<"/">> = properties => (
    <html className={INTER.className} lang="en">
        <body>{properties.children}</body>
    </html>
);

export default RootLayout;
