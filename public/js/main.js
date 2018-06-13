document.querySelector('.btn').addEventListener('click',(e) => {
  e.preventDefault();
 
 const title = document.getElementById('title');
 const titleHelperClassList = title.nextSibling.nextSibling.classList;

 const teaser = document.getElementById('teaser');
 const teaserHelperClassList = teaser.nextSibling.nextSibling.classList;

 const articleText = document.getElementById('articletext');
 const articleTextHelperClassList = articleText.nextSibling.nextSibling.classList;

 const author = document.getElementById('author');
 const authorHelperClassList = author.nextSibling.nextSibling.classList;


 //Fehler: Der Titel muss mehr als drei und weniger als elf Worte haben.
 if (title) {
   titleHelperClassList.remove('hide');
 } else if (!titleHelperClassList.contains('hide')){
   titleHelperClassList.add('hide');
 }

 //Fehler: Der Teaser soll nicht mehr als 250 Zeichen und nicht weniger als 50 Zeichen haben.
 if (teaser.value.length > 250 || teaser.value.length < 50) {
   teaserHelperClassList.remove('hide');
 } else if (!teaserHelperClassList.contains('hide')){
   teaserHelperClassList.classList.add('hide');
 }

 //Fehler: Autor darf nicht leer sein.
 if (author.value == '') {
   authorHelperClassList.remove('hide');
 } else if (!authorHelperClassList.contains('hide')){
   authorHelperClassList.add('hide');
 }

 // Allgemeine Fehlermeldung die nach 3s wieder verschwindet
 const errorHandling = () => {
   const errorMassege = document.getElementById('error-meldung').classList;
   errorMassege.remove('hide');
   setTimeout(() => {
     errorMassege.add('hide');
   }, 3000)
 }
 errorHandling();


 
});