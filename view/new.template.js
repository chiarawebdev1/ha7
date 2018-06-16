const header = require('./reusable/header.template');
const footer = require('./reusable/footer.template')

module.exports = `
    ${header}
    <div class="container">

    <div class="row">  
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <form id="new-article" action="/add-post" method="post">

                <div class="row">
                  <div class="col s6">
                  <label for="author">Author</label>
                    <input id="author" name="author" type="text" class="validate">
                    <span class="helper-text author-error error"></span>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                  <label for="title">Title</label>
                    <input id="title" name="title" type="text" class="validate">
                    <span class="helper-text title-error error"></span>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                  <label for="image">Image Link</label>
                    <input id="image" name="image" type="text" class="validate">
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <label for="teaser">Teaser</label>
                    <textarea id="teaser" name="teaser" class="materialize-textarea"></textarea>
                    <span class="helper-text teaser-error error"></span>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <label for="articletext">Artikel</label>
                    <textarea id="articletext" name="articletext" class="materialize-textarea"></textarea>
                    <span class="helper-text text-error warning"></span>
                  </div>
                </div>

                <input class="btn" type="submit" value="Submit">
              </form>
              </div>
          </div>
        </div> 
    </div> 

    <div id="error-meldung" class="hide">Oops! Something went wrong.</div>
    </div>
    <script src="main.js"></script>
  ${footer}
`;