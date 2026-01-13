import "server-only";

import { createEnv } from "@t3-oss/env-nextjs";

// import { z as zod } from "zod";

export default createEnv({
    server: {},
    emptyStringAsUndefined: true,
    runtimeEnv: {},
});
