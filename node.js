const express = require('express')
const app = express()
const fs = require('fs');
const fetch = require('node-fetch')

app.get('/', (req, res) => {
    fs.readFile('./BTCname.json', 'utf8', (error, data) => {        
        if(error) return console.log(error);
        const BTCname = JSON.parse(data);
        let url = `https://api.upbit.com/v1/ticker?markets=${BTCname[0].market}`;
        const options = {method: 'GET'};
        fetch(url, options)                            //업비트 가격정보 불러오기
        .then(res => res.json())
        .then(json => {
            console.log(json);
            res.send();
        })        
        .catch(err => console.error('error:' + err));
    })
})

app.listen(3000, () => {})
