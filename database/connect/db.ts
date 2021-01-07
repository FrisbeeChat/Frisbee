import arango from 'arangojs';

import { Database } from 'arangojs';
const db = new Database({
  url: process.env.DB_HOST,
});

db.useDatabase(process.env.DB_NAME);
db.useBasicAuth(process.env.DB_USER, process.env.DB_PASS);

export default db;