const admin = require("firebase-admin")

const serviceAccount = require('./firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const productId = 'M4JUR12XCkJH9wgYMTCQ'
const imageRef = db.collection('Products').doc(productId).collection('images').doc()
imageRef
  .set({
    description: 'my description',
    url: 'my image url'
  }).then(res => {
    console.log(res)
  })