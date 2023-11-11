import { capitalize as capitalise } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
    title?: string;
}

function Home(props: Props) {
    const { pathname } = useRouter();
    const title = props.title ?? (pathname === "/" ? "Home" : capitalise(pathname.slice(1)));

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main className={props.className}>{props.children}</main>
        </>
    );
}

export default {
    Home,
};
