

export const env = {
    JWT_SECRET: process.env.JWT_SECRET || "secret",
    EXPIRED_IN: 60 * 60 * 24,
};

