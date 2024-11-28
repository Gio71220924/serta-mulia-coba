const { Firestore } = require('@google-cloud/firestore');
 
async function storeData(id, data) {
//   console.log('Firestore credentials path:', process.env.GOOGLE_APPLICATION_CREDENTIALS);
  const db = new Firestore({databaseId: 'serta-mulia'});
 
  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}
 
module.exports = storeData;