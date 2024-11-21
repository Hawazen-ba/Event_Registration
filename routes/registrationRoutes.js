const express = require('express');
const router = express.Router();
const {registration, getRegistrations} = require ('../controllers/registrationController');

router.post('/registration', registration);
router.get('/registration', getRegistrations);

module.exports = router;