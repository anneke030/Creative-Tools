const { firebaseAppInit } = require('./firebase')
const express = require('express')
const { db } = require('./firebase');
const { addDoc, collection, getDocs } = require('firebase/firestore');

const app = express()
const port = 3000

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})