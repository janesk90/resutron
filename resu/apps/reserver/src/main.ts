/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 * 
 * Why am I creating a new DAO every time someone makes an API call?
 */

 var bodyParser = require('body-parser')

import * as express from 'express';
import { AccoladeTypesDAO } from '@resu/accolade-types/domain';
import { AccoladesDAO } from '@resu/accolades/domain';
import { AccoladesToPersonsDAO } from '@resu/accolades-to-persons/domain';
import { CompaniesDAO } from '@resu/companies/data-access';
import { PersonsDAO } from '@resu/persons/domain';
import { PositionsDAO } from '@resu/positions/data-access';
import { PositionNotesDAO } from '@resu/position-notes/data-access';
import { SkillsDAO } from '@resu/skills/data-access';
import { SkillsToPersonsDAO } from '@resu/skills-to-persons/domain';

let endpointMap = {
  accolade_types: AccoladeTypesDAO,
  accolades: AccoladesDAO,
  accolades_to_persons: AccoladesToPersonsDAO,
  companies: CompaniesDAO,
  persons: PersonsDAO,
  positions: PositionsDAO,
  position_notes: PositionNotesDAO,
  skills: SkillsDAO,
  skills_to_persons: SkillsToPersonsDAO
};

const app = express();
app.use(bodyParser.json())

app.get('/api/:endpoint', async (req, res) => {
  let mdao = new endpointMap[req.params.endpoint]({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x = await mdao.getAll();
  res.send(x);
});

app.get('/api/:endpoint/:id', async (req, res) => {
  let mdao = new endpointMap[req.params.endpoint]({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x: any;
  if (req.params.id) {
    x = await mdao.getOne(parseInt(req.params.id));
  } else {
    x = await mdao.getAll();
  }
  res.send(x);
});

app.put('/api/:endpoint', async (req, res) => {
  let mdao = new endpointMap[req.params.endpoint]({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  //res.send(req.body);
  let x = await mdao.updateOne(req.body);
  res.send(x);
});

app.post('/api/:endpoint', async (req, res) => {
  let mdao = new endpointMap[req.params.endpoint]({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  //res.send(req.body);
  let x = await mdao.createOne(req.body);
  res.send(x);
});

app.delete('/api/:endpoint/:id', async (req, res) => {
  let mdao = new endpointMap[req.params.endpoint]({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x: any;
  x = await mdao.removeOne(parseInt(req.params.id));
  res.send(x);
});

// position_notes
app.get('/api/position_notes/getByPositionId/:id', async (req, res) => {
  let mdao = new PositionNotesDAO({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x = await mdao.getByPositionsId(parseInt(req.params.id));
  res.send(x);
});

// positions
app.get('/api/positions/getByPersonId/:id', async (req, res) => {
  let mdao = new PositionsDAO({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x = await mdao.getByPersonsId(parseInt(req.params.id));
  res.send(x);
});
app.get('/api/positions/getByCompanyId/:id', async (req, res) => {
  let mdao = new PositionsDAO({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x = await mdao.getByCompaniesId(parseInt(req.params.id));
  res.send(x);
});

// skills
app.get('/api/skills/getByPersonId/:id', async (req, res) => {
  let mdao = new SkillsDAO({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x = await mdao.getByPersonId(parseInt(req.params.id));
  res.send(x);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
