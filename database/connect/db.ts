import arango from 'arangojs';

const db = new arango.Database({
  url: 'http://13.57.219.36:8529'
});

db.useDatabase('frisbee');
db.useBasicAuth('root', 'open');

export default db;