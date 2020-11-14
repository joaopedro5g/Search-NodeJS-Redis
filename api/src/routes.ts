/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from 'express';

import SearchController from './controller/SearchController';
import Search2Controller from './controller/Search2Controller';

const routes = Router();

const search = new SearchController();
const search2 = new Search2Controller();

routes.get('/search', search.index);

routes.get('/data/personal', search2.index);

export default routes;
