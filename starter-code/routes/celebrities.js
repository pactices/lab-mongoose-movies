const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js')


/* GET celebs page */
router.get('/', (req, res, next) => { // ESTO ES EL CONTROLADOR
  Celebrity.find() // ESTO ES EL MODELO
    .then(allCelebs => res.render('celebrities', {
      celebrities: allCelebs
    })) // ESTO ES LA VISTA
    .catch(error => console.log(error))
})

//GET celeb's detail
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(theCeleb => res.render('show', {
      celebrity: theCeleb
    }))
    .catch(error => console.log(error))
})





module.exports = router;