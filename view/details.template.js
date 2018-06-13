const header = require('./reusable/header.template');
const footer = require('./reusable/footer.template')

module.exports = `
    ${header}
    <div class="container">
    <div class="row"> 
        <div class="col s12">
          <div class="card">
            <div class="card-image">
              <img src={{image}}>
              <span class="card-title">{{title}}</span>
            </div>
            <div class="card-content">
              <p><b>{{published}}</b></p>
              <br>
              <p>{{articletext}}</p>
              <br>
              <h5>{{author}}</h5>
            </div>
          </div>
        </div> 
    </div> 
    ${footer}
`;