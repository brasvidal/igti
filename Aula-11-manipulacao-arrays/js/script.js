const dados = 'https://randomuser.me/api/?results=100';
fetch(dados, {
  method: 'get',
}).then(function (response) {
  response.json().then(function (data) {
    function doMap() {
      const nameEmailArray = data.results.map((person) => {
        return {
          name: person.name,
          email: person.email,
        };
      });
      return nameEmailArray;
    }

    console.log(doMap());
  });
});
