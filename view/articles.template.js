const header = require('./reusable/header.template');
const footer = require('./reusable/footer.template')

module.exports = `
    ${header}
    <nav id="search">
    <div class="nav-wrapper white">
      <form id="search-form" action="/search/" method="post">
        <div class="input-field">
          <input id="search" name="search" type="search">
          <label class="label-icon" for="search"><i class="material-icons search-i">search</i></label>
        </div>
      </form>
    </div>
  </nav>

  <div id="suggestions">
    
  </div>

  <div class="container">
    <div class="row">
      {{#fakeData}}    
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src={{image}}>
              <span class="card-title">{{title}}</span>
            </div>
            <div class="card-content">
              <p>{{teaser}}</p>
            </div>
            <div class="card-action">
              <a href="/details/{{id}}">Read more</a>
            </div>
          </div>
        </div>
      {{/fakeData}}   
    </div> 
  </div>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="search.js"></script>
  ${footer}
`;