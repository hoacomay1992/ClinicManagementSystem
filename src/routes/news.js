const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')
// newsController.index tương đương với phần
// (req, res) => {
//     res.render('news');
// }
//Cần phải nạp file này vào trong routes/index.js

router.get('/:slug', newsController.show)
router.get('/', newsController.index);

module.exports = router;