/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import http from 'http';

import routes from './routes';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

server.listen(3334);
