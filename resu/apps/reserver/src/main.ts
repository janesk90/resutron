/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {MySQLDataAccessorModule, Persons, MST, PersonsProps} from '../../../libs/resume-entity/src/lib/resume-entity.module';

const app = express();

app.get('/api/:endpoint/:id', async (req, res) => {
  let d = {
    persons: 'persons_id',
    positions: 'positions_id',

  };
  let mdao = new MST<PersonsProps>({host: 'localhost',user: 'root',password: 'root',database: 'kr'}, req.params.endpoint, d[req.params.endpoint]);
    let x = await mdao.getOne(parseInt(req.params.id));
    res.send(x);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
