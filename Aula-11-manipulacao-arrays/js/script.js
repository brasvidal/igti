//Declaração de função anonima de carregamento da pagina
window.addEventListener('load', () => {
  const nomeEmailArray = results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nomeEmailArray);
  //todo
});
