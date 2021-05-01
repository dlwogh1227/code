const express = require('express')
const app = express()
const port = 3000

const fetch = require('node-fetch')
let url = 'https://api.upbit.com/v1/market/all?isDetails=false'   //업비트 api
const options = {method: 'GET'}

app.get('/', (req, res) => {
  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log())
  .catch(err => console.error('error:' + err));
  res.send(res.json);
})

app.listen(port, () => {
  
})