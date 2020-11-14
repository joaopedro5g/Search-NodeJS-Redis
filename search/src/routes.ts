/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from 'express';
import SearchController from './controller/SearchController';

const routes = Router();

const search = new SearchController();

routes.get('/search', search.index);
routes.get('/data/personal', search.index);

export default routes;
