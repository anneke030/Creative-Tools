const { firebaseAppInit } = require('./firebase')
const express = require('express')
const { db } = require('./firebase');
const port = process.env.PORT || 3000;
const { addDoc, collection, getDocs } = require('firebase/firestore');
const apiRoutes = require("./routes/interactions");

const app = express()

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})