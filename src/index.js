import cronflow from './app';

const { PORT = 8080 } = process.env;
cronflow.listen(PORT);
