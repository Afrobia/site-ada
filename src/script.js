let nome = document.getElementById("name");
let email = document.getElementById("email");
let telefone = document.getElementById("phone");
let button = document.getElementById("enviar");
let form = { nome, email, telefone };

function validarCampo() {
  nome.value == "" || email.value == "" || telefone.value == ""
    ? alert("Preencha todos os campos!")
    : enviarForm();
}

function enviarForm() {
  let form = novoForm(nome, email, telefone);
  console.log(form);
  alert(`${form.nome}, seu formulário enviado com sucesso!`);
}

function novoForm(nome, email, telefone) {
  let form = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
  };
  return form;
}

button.addEventListener("click", () => {
  validarCampo();
});
