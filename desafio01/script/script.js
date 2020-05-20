document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM completamente carregado e analisado');
  fetch('https://randomuser.me/api/?results=100&callback=randomuserdata')
    .then((response) => {
      return response.json(text); // or .text() or .blob() ...
    })
    .then((text) => {
      // text is the response body
    })
    .catch((e) => {
      // error in e.message
    });
});
