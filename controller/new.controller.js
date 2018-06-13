const Handlebars = require('handlebars');
const newTemplate = require('../view/new.template');

let newController = (req,res) => {

    let template = Handlebars.compile(newTemplate);

    let ouput = template();

    return res.send(ouput);
};

module.exports = newController;