const express = require('express'); //Express xpress.application={}
const router = express.Router(); //Router logic

//This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//deine route for our trip endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList); //GET Method routes tripsList

    
    //GET method routes tripsFindByCode - requires parameter
    router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

    module.exports = router;