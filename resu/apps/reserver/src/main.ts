/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { AccoladesDAO, AccoladesToPersonsDAO, AccoladeTypesDAO, CompaniesDAO, PersonsDAO, PositionNotesDAO, PositionsDAO, SkillsDAO, SkillsToPersonsDAO } from '../../../libs/resume-entity/src/lib/resume-entity.module';

const app = express();

app.get('/api/:endpoint', async (req, res) => {
  let d = {
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
  let mdao = new d[req.params.endpoint]({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x = await mdao.getAll();
  res.send(x);
});

app.get('/api/:endpoint/:id', async (req, res) => {
  let d = {
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
  let mdao = new d[req.params.endpoint]({ host: 'localhost', user: 'root', password: 'root', database: 'kr' });
  let x: any;
  if (req.params.id) {
    x = await mdao.getOne(parseInt(req.params.id));
  } else {
    x = await mdao.getAll();
  }
  res.send(x);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
