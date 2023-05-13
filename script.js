function consultarCep() {
    let cep = document.querySelector('.ncep').value;
    if(cep.length !== 8 ){
        alert("CEP invalido, por favor tente novamente")
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
    });
}

function mostrarEndereco(dados) {
    let resultados = document.querySelector('.resultado');
    if(dados.erro) {
        resultados.innerHTML = "Não foi possivel encontraro CEP desejado" 
    }else{
    resultados.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade}</p>
                            <p>Uf: ${dados.uf}</p>`
                        }

} 