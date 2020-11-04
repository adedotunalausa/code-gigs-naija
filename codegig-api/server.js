const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database')

// Testing the database
db.authenticate()
  .then(() => {
    console.log('Connected to database successfully')
  })
  .catch((error) => {
    console.log('Unable to connect to database', error)
  })

const server = express();

server.get('/', (req, res) => {
  res.send('Hello coder')
})

// Gig routes
server.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));