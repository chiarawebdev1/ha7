const Handlebars = require('handlebars');
const fakeData = require('../model/fakeData.model').sortedData;
const detailsTemplate = require('../view/details.template');


let detailsController = (req,res) => {

    let reqId = req.params.id;
    let articleDetail = {};

    fakeData.forEach(element => {
        if (element.id == reqId) {
            articleDetail.title = element.title;
            articleDetail.articletext = element.articletext;
            articleDetail.published = `${element.published.getDate()}.${element.published.getMonth()}.${element.published.getFullYear()}`;
            articleDetail.author = element.author;
            articleDetail.image = element.image;
        }
    });
    
    let template = Handlebars.compile(detailsTemplate);
    let ouput = template(articleDetail);

    return res.send(ouput);
};

module.exports = detailsController;