const Handlebars = require('handlebars');
const oldFakeData = require('../model/fakeData.model').sortedData;
const articlesTemplate = require('../view/articles.template');

let searchController = (req,res) => {

  let search = req.body.search

  // Filtered fakeData
  let fakeData = [];

  oldFakeData.forEach(element => {
    if (search === '') {
      res.redirect('/');
    }
    else if (element.title.includes(search)) {
      fakeData.push(element);
    }
  });
  
  let template = Handlebars.compile(articlesTemplate);
  let ouput = template({fakeData});

  return res.send(ouput);
};

module.exports = searchController;