export async function getCep(cep) {
	const url = `https://viacep.com.br/ws/${cep}/json/`;
  	// Make the API request
  	const request = await fetch(url)
    	.then(response => response.json())
    	.catch(error => {
      		console.error('Error:', error);
    	});

	return request;
}

export function setCep(cep) {
	const logradouro = document.getElementById('logradouro');
	const bairro = document.getElementById('bairro');
	const estado = document.getElementById('estado');
	const cidade = document.getElementById('localidade');

	logradouro.value = cep.logradouro;
	bairro.value = cep.bairro;
	estado.value = cep.uf;
	cidade.value = cep.localidade;
}