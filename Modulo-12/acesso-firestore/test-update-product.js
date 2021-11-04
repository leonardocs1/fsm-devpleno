const admin = require("firebase-admin")

const serviceAccount = require('./firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const cat1 = '4vFIn9D8gZQNpl92tLeM'
const catRef = db.collection('categories').doc(cat1)

const doc = db.collection('Products').doc('RaRXpkiowFTwNfT3D71f')
doc
  .update({
    product: 'Nome produto',
    price: 20000,
    categories: admin.firestore.FieldValue.arrayUnion(catRef),
    categories2: admin.firestore.FieldValue.arrayUnion(cat1)
  }).then(snap => {
    console.log(snap)
  })