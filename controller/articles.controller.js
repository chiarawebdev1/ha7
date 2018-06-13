const Handlebars = require('handlebars');
const articlesTemplate = require('../view/articles.template');
const fakeData = require('../model/fakeData.model').sortedData;

let articlesController = (req,res) => {
    let template = Handlebars.compile(articlesTemplate);
    let ouput = template({fakeData});

    return res.send(ouput);
};

module.exports = articlesController;