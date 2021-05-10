const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {
    fs.readFile('./BTCname.json', 'utf8', (error, data) => {        
        if(error) return console.log(error);
        const BTCname = JSON.parse(data);
        var symbols = new Array();
        for(i in BTCname){
          symbols.push(BTCname[i].market);
        }
        console.log(symbols);       
        res.send();
      })  
})

app.listen(3000, () => {})
