const  { Router} = require('express');
const routes = Router();
const multer = require('multer');
const uploadconfig = require('./config/uploads');

const ProfControllers = require('./controllers/ProfController');
const SearchControllers = require('./controllers/SearchController');


const upload = multer(uploadconfig);


routes.get('/prof',ProfControllers.index);
routes.post('/prof',upload.single('avatar_url'),ProfControllers.store);

routes.get('/search',SearchControllers.index);

/**/
module.exports = routes;