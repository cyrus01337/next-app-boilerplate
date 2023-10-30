import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { Inter } from "next/font/google";

const INTER = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={INTER.className}>
            <Component {...pageProps} />
        </main>
    );
}
