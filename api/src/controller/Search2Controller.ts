/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export default class SearchController {
  async index(req: Request, res:Response) {
    const app = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'data2.json')).toString());
    setTimeout(() => res.json(app), 4000);
  }
}
