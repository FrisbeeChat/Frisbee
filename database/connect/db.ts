import arango from 'arangojs';

const db = new arango.Database({
  url: 'http://127.0.0.1:8529'
});

db.useDatabase('sdc');
db.useBasicAuth('root', '');

export default db;