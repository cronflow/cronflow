const insecureUrl = [
    '/token/generate',
    '/login',
    '/logout',
    /\/test\/*/,
    '/err',
];

const dbConf = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_DIALECT.toLowerCase(),
    pool: {
        max: 5,
        min: 0,
        acquire: 2000,
        idle: 5000,
    },
    logging: false,
};


export { insecureUrl, dbConf };

