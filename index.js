const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.get("/", (request, response) => {
  response.send("Server working")
})

app.get("/api/repos", (request, response) => {
  console.log("getting repos")
  fetch('https://api.github.com/users/izzycode/repos')
    .then( res => res.json() )
    .then( data => {
      response.json(data)
    })
    .catch( err => console.log( err ) )
})

app.listen( process.env.PORT || 5000, () => {
  console.log( "Server running..." )
})
