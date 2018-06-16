const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const fakeData = require('./model/fakeData.model').data;

const newController = require('./controller/new.controller');
const detailsController = require('./controller/details.controller');
const articlesController = require('./controller/articles.controller');
const addPostController = require('./controller/addPost.controller');
const searchController = require('./controller/search.controller');

const app = express();
const jsonData = JSON.stringify(fakeData);

app.use(express.static('./public/styles'));
app.use(express.static('./public/js'));
app.use('/search/', express.static('./public/js'));

app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.use(cors());

app.get('/get-articles', function (req, res, next){
  res.json(jsonData)
});

app.get('/', articlesController);

app.get('/details/:id', detailsController);

app.get('/new', newController);

app.post('/add-post', addPostController);

app.post('/search', searchController);

app.listen(3000, () => console.log('App is listening on port 3000'));