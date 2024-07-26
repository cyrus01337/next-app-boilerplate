import process from "process";

if (
    process.env.NODE_ENV === "production" ||
    process.env.CI === "true" ||
    process.env.HUSKY === 0 ||
    process.env.HUSKY === false
) {
    console.log("Skipping Husky...");

    process.exit(0);
}

const husky = (await import("husky")).default;

// eslint-disable-next-line no-console
console.log(husky());
