// Aqui você pode adicionar funcionalidades interativas usando JavaScript
console.log("Portfólio carregado com sucesso!");

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Mensagem enviada com sucesso!');
});
