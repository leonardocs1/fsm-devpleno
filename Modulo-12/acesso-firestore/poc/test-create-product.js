const admin = require("firebase-admin")

const serviceAccount = require('./firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const cat1 = 'SuwcQivlbDCfDJcxv2pe'
const catRef = db.collection('categories').doc()

const doc = db.collection('Products').doc()
doc
  .set({
    product: 'Nome produto',
    price: 20000,
    categories: [catRef],
    categories2: [cat1]
  }).then(snap => {
    console.log(snap)
  })