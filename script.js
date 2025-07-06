// Adiciona um listener ao formulário de contato para validar antes do envio
document.getElementById('contatoForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;

  // Verifica se todos os campos foram preenchidos
  if(nome && email && mensagem) {
    // Exibe mensagem de sucesso se todos os campos estiverem preenchidos
    document.getElementById('formStatus').innerText = "Mensagem enviada com sucesso!";
  } else {
    // Exibe mensagem de erro caso algum campo esteja vazio
    document.getElementById('formStatus').innerText = "Por favor, preencha todos os campos.";
  }
});

// Ao carregar a página, aplica efeito de fadeIn em todos os elementos <h2>
window.onload = function() {
  document.querySelectorAll('h2').forEach(function(el) {
    el.style.opacity = 0; // Inicialmente invisível
    el.style.transition = "opacity 2s"; // Transição de opacidade em 2 segundos
    setTimeout(function(){ el.style.opacity = 1; }, 500); // Após 500ms, torna visível
  });
};
