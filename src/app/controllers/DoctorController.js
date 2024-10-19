
const Doctor = require('../models/Doctor');
const { mutipleMongooseToObject } = require('../../utils/mongoose')
class DoctorController {
    // //[GET] /courses/create
    // create(req, res, next) {
    //     res.render('doctors/create')
    // }
    // //[POST]//courses/store
    // async store(req, res, next) {
    //     // res.json(req.body);
    //     const formData = req.body;
    //     formData.image = 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png';
    //     const course = new Course(formData);
    //     await course.save()
    //         .then(() => res.redirect('/'))
    //         .catch(error => {

    //         });

    //     // res.send(formData)
    // }
    //[GET] /doctors/show
    show(req, res, next) {

        Doctor.find({})
            .then(doctors => {
                res.json(doctors);
                // res.render('doctors/show', {
                //     doctors: mutipleMongooseToObject(doctors)
                // });
            })
            .catch(next);
    }
}


module.exports = new DoctorController;