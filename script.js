// LÓGICA DE VERIFICAÇÃO DE IDADE

const idadeInput = document.getElementById('idadeInput');
const veriFyButton = document.getElementById('veriFyButton');
const result = document.getElementById('resultado');

function verificarIdade(){
    resultado.classList.remove('visivel');
    const idade = parseInt(idadeInput.value);
    let menssagem = '';

    if(isNaN(idade) || idade < 0){
        menssagem = 'Por favor, insira uma idade válida.';
    }else if(idade < 18){
        menssagem = 'Você é menor de idade';
    }else if(idade < 65){
        
    }
}