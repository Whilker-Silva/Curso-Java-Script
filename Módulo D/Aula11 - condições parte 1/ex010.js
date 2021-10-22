
var botao = window.document.querySelector('input#botao');

botao.addEventListener('click', verificar_velocidade);

function verificar_velocidade() {

    var velocidade = window.document.querySelector('input#txtvel');
    var resultado = window.document.querySelector('div#resultado');
    velocidade = Number(velocidade.value);


    if (velocidade > 100) {

        console.log(velocidade);
        resultado.style.background = 'red';
        resultado.innerHTML = `<p>Sua velocidade é de: <strong>${velocidade} Km/h</strong></p>`;
        resultado.innerHTML += '<p>MULTADO!!!</p>';
        resultado.innerHTML += '<p>Reduza a sua velocidade!</p>';
    }

    else {
        resultado.style.background = '#034EA2';
        resultado.innerHTML = `<p>Sua velocidade é de: <strong>${velocidade} Km/h</strong></p>`;
        resultado.innerHTML += '<p>BOA VIAGEM!!!</p>';
        resultado.innerHTML += '<p>Dirija sempre com cuidado!</p>';
    }
}