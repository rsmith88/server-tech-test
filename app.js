const express = require('express')
const app = express()
const url = require('url')
const dataExports = require('./data.js')

let data = new dataExports.Data()

// Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('testValue')
})

app.get('/set', (req, res) => {
  let params = url.URL(req.url, true).query
  console.log(params)
  res.send(data.set(params))
})

app.get('/get', (req, res) => {
  let params = url.URL(req.url, true).query
  console.log(params)
  res.send(data.get(params))
})

// Launch listening server on port 8080
app.listen(4000, function () {
  console.log('App listening on port 4000!')
})
