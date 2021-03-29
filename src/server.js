'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const app = express();
const validator = require('./middleware/validator.js');

//global middleware
app.use(express.json());
app.use(logger);

app.get('/', (req , res)=>{
  res.send('Hello World')
})


app.get('/person', validator , (req,res)=>{
      let name = req.query.name ; 
      res.json( 
          {
              name : name, 
          }
      )
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: (port) => {
    const PORT = port || 5000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};