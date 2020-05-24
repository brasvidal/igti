window.addEventListener('load', () => {
  async function getData() {
    const res = await fetch('https://api.github.com/');
    const dados = await res.json();
    return dados;
  }

  console.log(getData());
});
