const cep__input = document.getElementById('cep');
const logradouro = document.getElementById('logradouro');
const numero = document.getElementById('numero');
const bairro = document.getElementById('bairro');
const estado = document.getElementById('estado');
const localidade = document.getElementById('localidade');

async function getCEP(cep) {
  const url = `https:viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

function setCEPFields(cep) {
  logradouro.value = cep.logradouro;
  numero.value = cep.complemento;
  bairro.value = cep.bairro;
  estado.value = cep.uf;
  localidade.value = cep.localidade;
}

function handleCEPInput(e) {
  if (e.key === "Enter") {
    const cep = await getCEP(cep__input.value);
    setCEPFields(cep);
  }
}

export { handleCEPInput };
