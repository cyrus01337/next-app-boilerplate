import { capitalize as capitalise } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";

function Home({ className, children, title }) {
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

export default {
    Home,
};
