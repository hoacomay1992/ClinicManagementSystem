const newsRouter = require('./news');
const doctorRouter = require('./doctor');
const siteRouter = require('./site');
function route(app) {

    app.use('/', siteRouter);
    app.use('/news', newsRouter);
    app.use('/doctors', doctorRouter);

    app.use('/search', siteRouter);
}
module.exports = route;
