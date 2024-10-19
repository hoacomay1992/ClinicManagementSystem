const express = require('express');
const router = express.Router();

const doctorController = require('../app/controllers/DoctorController')

router.get('/show', doctorController.show);
// router.get('/create', doctorController.create);
// router.post('/store', doctorController.store);
// router.get('/:slug', doctorController.show);

module.exports = router;