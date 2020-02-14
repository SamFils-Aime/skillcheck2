require("dotenv").config()
const express = require('express')
const app = express()
const massive = require('massive')
const controller = require('./controller')


const {SERVER_PORT, CONNECTION_STRING} = process.env;


massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));


app.use(express.json());
 
app.get('/api/houser', controller.get_houses)
app.post('/api/houser', controller.add_house)
app.delete('/api/houser/:id', controller.delete_house)
  
app.listen(SERVER_PORT,() => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });
