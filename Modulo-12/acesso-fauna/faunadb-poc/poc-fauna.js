require('dotenv/config');
const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNA_SERVER_SECRET
})

const createContact = data => {
  return client.query(
    q.Create(
      q.Collection('contacts'),
      { data }
    )
  )
}

const getContactByRef = ref => {
  return client.query(q.Get(q.Ref(q.Collection('contacts'), ref)))
}
/*
getContactByRef("316144672854508113")
  .then(res => {
    console.log(res)
  })
*/

const getAllContacts = () => {
  return client.query(
    q.Map(
      q.Paginate(
        q.Match('allContacts'),
        { size: 2 }
      ),
      q.Lambda(x => q.Get(x))
    )
  )
}

const getContactByEmail = email => {
  return client.query(q.Get(q.Match(q.Index('contactByEmail'), [email])))
}
getContactByEmail('contato@devpleno.com').then((contato) => {
  console.log(contato)
})

/*
getAllContacts().then(all => {
  console.log(all)
})
*/
/*
createContact({
  name: 'Joao',
  email: 'joao@joao.com',
  title: 'joao'
}).then((ret) => {
  console.log(ret)
})
*/