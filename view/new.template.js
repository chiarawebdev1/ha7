const header = require('./reusable/header.template');
const footer = require('./reusable/footer.template')

module.exports = `
    ${header}
    <div class="container">
    <div class="row">  
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">

            <div class="row">
                  <div class="col s12">
                    <p id="error-meldung" class="hide">Oops!Looks like something went wrong. I gave you some hints up there.</p>
                  </div>
                </div>

              <form id="new-article" action="/add-post/" method="post">

                <div class="row">
                  <div class="col s12">
                    <label for="author">Author</label>
                    <input id="author" name="author" type="text" class="validate">
                    <span class="helper-text error hide">Hey, author can't be empty! Write your name here.</span>
                  </div>
                </div>

  

                <div class="row">
                  <div class="col s12">
                    <label for="title">Title</label>
                    <input id="title" name="title" type="text" class="validate">
                    <span class="helper-text error hide">Your title needs more than 3 and less then 11 words - try again :) </span>
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
                    <span class="helper-text error hide">Your teaser has to be somewhere in between 50 and 250 characters - try again :)</span>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <label for="articletext">Artikel</label>
                    <textarea id="articletext" name="articletext" class="materialize-textarea"></textarea>
                    <span class="helper-text hide warning">Your text needs more than 30 words - help me out here, try again :)</span>
                  </div>
                </div>

                <input class="btn" type="submit" value="Publish">
              </form>
              </div>
          </div>
        </div> 
      </div> 
    </div>

  ${footer}
`;