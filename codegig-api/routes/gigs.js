const express = require("express");
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig')

// Get gig list
router.get('/', (req, res) =>
  Gig.findAll()
    .then(gigs => {
      var data = []
      for (var i = 0; i < gigs.length; i++) {
        data[i] = gigs[i].toJSON();
      }
      res.render('gigs', {
        data
      });
    })
    .catch(err => {
      console.log(err);
    })
);

// Display add gig form
router.get('/add', (req, res) => {
  res.render('add')
});

// Add a gig
router.post('/add', (req, res) => {
  const data = {
    title: 'Simple wordpress website',
    technologies: 'Wordpress,php, HTML5, CSS3',
    budget: '$1000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
    contact_email: 'user2@gmail.com'
  }

  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
})

module.exports = router