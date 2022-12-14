import Head from "next/head";
import { capitalize as capitalise } from "lodash";
import { useRouter } from "next/router";

export default function Layout({ className, children, title }) {
    const { pathname } = useRouter();
    title ??= pathname === "/" ? "Home" : capitalise(pathname.slice(1));

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main className={className}>{children}</main>
        </>
    );
}
