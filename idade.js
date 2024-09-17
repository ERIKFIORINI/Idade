function armazenaridade(){
    
    var valoridade = document.getElementById("valoridade").value;
    var mensagem = '';

    if (valoridade <= 35) {
       mensagem = 'Você é novo!'
    } else if (valoridade > 35 && valoridade < 65){
        mensagem = 'Você está ficando velho!'
    } else {
        mensagem = 'Você é velho!'
    }

    document.getElementById("valorInserido").innerHTML = `Sua idade é ${valoridade} anos. <br> ${mensagem}`;
 
    
    }

