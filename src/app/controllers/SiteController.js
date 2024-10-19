
const Package = require('../models/Package');
const { mutipleMongooseToObject } = require('../../utils/mongoose')
class SiteController {
    //[GET] /
    async home(req, res, next) {
        Package.find({})
            .then(packages => {
                res.render('home', {
                    packages: mutipleMongooseToObject(packages)
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search')
    }
}


module.exports = new SiteController;