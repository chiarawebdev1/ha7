const errorMessage = () => {
  const errorPromt = document.getElementById('error-meldung').classList;
  errorPromt.remove('hide');
  setTimeout(() => {
    errorPromt.add('hide');
  }, 3000)
 }

const formValidation = (element, id, min, max) => {
  let value;
  let error;

  switch (id) {
      case 'title':
          value = element.split(' ').length;
          error = 'Word count';
          break;
      case 'teaser':
          value = element.length;
          error = 'Characters';
          break;
      case 'text':
          value = element.split(' ').length;
          error = 'Word count';
          break;
      case 'author':
          value = element.length;
          error = 'Author';
          break;
  }

  if (value <= min && min === 0) {
      document.querySelector(`.${id}-error`).textContent = `${error} needs to be set!`;
      return 1;
  }
  if (value <= min && min !== -1) {
      document.querySelector(`.${id}-error`).textContent = `${error} needs to be higher than ${min}!`;
      return 1;
  }
  if (value >= max && max !== -1) {
      document.querySelector(`.${id}-error`).textContent = `${error} needs to be less than ${max}!`;
      return 1;
  }
  document.querySelector(`.${id}-error`).textContent = '';
  return 0;
}

  document.querySelector('.btn').addEventListener('click',(e) => {
    e.preventDefault();
    let errorCounter = 0;
    let articleTitleValue = document.getElementById('title').value;
    let articleTeaserValue = document.getElementById('teaser').value;
    let articleAuthorValue = document.getElementById('author').value;

    errorCounter += formValidation(articleTitleValue, 'title', 3, 11);
    errorCounter += formValidation(articleTeaserValue, 'teaser', 50, 250);
    errorCounter += formValidation(articleAuthorValue, 'author', 0, -1);

    if (errorCounter === 0) {
        let form = document.querySelector('form');
          form.submit();
    } else {
        errorMessage();
      }
    });

  document.getElementById('articletext').addEventListener('keydown',(e) => {
    let articleTextValue = document.getElementById('articleText').value;
    let errorCounter = 0;
      errorCounter += formValidation(articleTextValue, 'text', 30, -1);
    });

