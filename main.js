const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {
  res.send(); 
})

app.listen(3000, () => {})
