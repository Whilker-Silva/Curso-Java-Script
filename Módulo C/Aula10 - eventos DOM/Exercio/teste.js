var soma = window.document.querySelector('input#soma');
        var menos = window.document.querySelector('input#menos');
        var multiplica = window.document.querySelector('input#multiplica');
        var divide = window.document.querySelector('input#divide');

        soma.addEventListener('click', clique_soma);
        menos.addEventListener('click', clique_menos);
        multiplica.addEventListener('click', clique_multiplica);
        divide.addEventListener('click', clique_divide);

        function clique_soma() {

            var t1 = window.document.querySelector('input#tx1');
            var t2 = window.document.querySelector('input#tx2');
            var n1 = Number(t1.value);
            var n2 = Number(t2.value);
            var soma = n1 + n2;

            var resultado = window.document.querySelector('div');
            resultado.innerText = `O resultado é: ${soma}`;
        }

        function clique_menos() {

            var t1 = window.document.querySelector('input#tx1');
            var t2 = window.document.querySelector('input#tx2');
            var n1 = Number(t1.value);
            var n2 = Number(t2.value);
            var soma = n1 - n2;

            var resultado = window.document.querySelector('div');
            resultado.innerText = `O resultado é: ${soma}`;
        }

        function clique_multiplica() {

            var t1 = window.document.querySelector('input#tx1');
            var t2 = window.document.querySelector('input#tx2');
            var n1 = Number(t1.value);
            var n2 = Number(t2.value);
            var soma = n1 * n2;

            var resultado = window.document.querySelector('div');
            resultado.innerText = `O resultado é: ${soma}`;
        }

        function clique_divide() {

            var t1 = window.document.querySelector('input#tx1');
            var t2 = window.document.querySelector('input#tx2');
            var n1 = Number(t1.value);
            var n2 = Number(t2.value);
            var soma = (n1 / n2).toFixed(2).replace('.', ',');        

            var resultado = window.document.querySelector('div');
            resultado.innerText = `O resultado é: ${soma}`;
        }