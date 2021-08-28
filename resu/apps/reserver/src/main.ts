/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {MySQLDataAccessorModule, Persons} from '../../../libs/resume-entity/src/lib/resume-entity.module';

const app = express();

app.get('/api', async (req, res) => {
  let mdao = new MySQLDataAccessorModule<Persons>({host: 'localhost',user: 'root',password: 'root',database: 'kr'});
    let x = await mdao.getOne(1);
    res.send(x);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
