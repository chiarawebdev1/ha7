const fakeData = require('../model/fakeData.model').data;

let addPostController = (req,res) => {

  let newId = fakeData.length + 1;
  let title = req.body.title;
  let teaser = req.body.teaser;
  let articletext = req.body.articletext;
  let author = req.body.author;
  let published = new Date();
  let image = req.body.image;
  
  newArticle = {
    id: newId,
    title: title,
    teaser: teaser,
    articletext: articletext,
    author: author,
    published: published,
    image: image,
  }
  
  fakeData.unshift(newArticle);

  res.redirect('/');
};

module.exports = addPostController;