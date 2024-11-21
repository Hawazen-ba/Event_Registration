const express = require('express');
const router = express.Router();
const {createEvent, getEvents} = require ('../controllers/eventController')

router.post('/event', createEvent);
router.get('/event', getEvents);

module.exports = router;