import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";

import router from "~/shared/router";

import type { RouterClient } from "@orpc/server";

const LINK = new RPCLink({
    url: `${typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"}/rpc`,

    headers: async () => {
        if (typeof window !== "undefined") {
            return {};
        }

        const { headers } = await import("next/headers");

        return await headers();
    },
});
const CLIENT: RouterClient<typeof router> = createORPCClient(LINK);

export default CLIENT;
