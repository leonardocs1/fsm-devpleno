const admin = require("firebase-admin")

const serviceAccount = require('./firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const productId = 'M4JUR12XCkJH9wgYMTCQ'

const productRef = db.collection('Products').doc(productId)
db
  .collection('Products')
  .doc(productId)
  .collection('images')
  .get()
  .then(imgSnapshot => {
    const exclusoes = []
    imgSnapshot.forEach(img => {
      exclusoes.push(db.collection('Products').doc(productId).collection('images').doc(img.id).delete())
    })
    return Promise.all(exclusoes)
  })
  .then(() => {
    return productRef.delete()
  })
  .then(() => {
    console.log('everything was deleted')
  })
