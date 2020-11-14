/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import axios from 'axios';

import { promisify } from 'util';

import { FilterData } from '../function/CompileData';
import { client as database, redis } from '../model/redis';

export default class SearchController {
  async index(req:Request, res:Response) {
    const getDataRedis = promisify(database.get).bind(database);
    const redisData = await getDataRedis(`${req.path}`);
    const personal = !!String(redisData) ? JSON.parse(String(redisData))
      : { data: [], date: Date.now() };
    if ((new Date(personal.date).getMinutes() + 2) <= new Date(Date.now()).getMinutes()) {
      database.set(`${req.path}`, '');
    }
    if (redisData) {
      const filter = await FilterData(personal.data, {
        params: {
          job: 'Analyst Programmer',
        },
      });
      return res.json(filter);
    }
    const response = await axios({
      url: `${process.env.API_URL}${req.path}`,
    });
    const filter = await FilterData(response.data, {
      params: {
        job: 'Analyst Programmer',
      },
    });
    await database.set(`${req.path}`, JSON.stringify({ data: response.data, date: Date.now() }), redis.print);
    return res.json(filter);
  }
}
