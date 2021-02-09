const express = require("express");
const router = express.Router();
const app = express();

const { getUsers, postUser, signin } = require('../controllers/users');
const { getCakes, postCake, patchCake, deleteCake, getSpecificCake } = require('../controllers/links.js');
const { postCheckbox, getCheckbox, getSpecificCheckbox, patchCheckbox } = require('../controllers/checkbox');

router.get('/', (req, res) => {
  
  res.send(
    "<h2>endpoints avaibles:</h2>" +
    "<ul>" +
    "<li>method:get in / , endpoints avaibles.</li>" +
    "<li>method:post in /cakes , add a cake to the database.</li>" +
    "<li>method:get in /cakes, obtain array of cakes.</li>" +
    "<li>method:get in /cakes/:id , obtain information specific of the cake</li>" +
    "<li>method:patch in /cakes/:id , modify a cake in the database.</li>" +
    "<li>method:delete in /cakes/:id , delete the cake indicated in the database.</li>" +
    "</ul>");
  });
  
  // Users login
  router.get('/users', getUsers);
  
  router.post('/register', postUser);
  
  router.post('/login', signin);


// Forms 
router.get('/checkbox', getCheckbox);

router.post('/checkbox', postCheckbox);

router.get('/checkbox/:name', getSpecificCheckbox);

router.patch('/checkbox/:name', patchCheckbox);

// Cakes
router.get('/cakes', getCakes);

router.get('/cakes/:id', getSpecificCake);

router.post('/cakes', postCake);

router.patch('/cakes/:id', patchCake);

router.delete('/cakes/:id', deleteCake);

module.exports = router;
