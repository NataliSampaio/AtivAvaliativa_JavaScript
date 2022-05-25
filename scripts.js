function ativ_01() {
    var num1 = Number(window.prompt("Informe um número: "));
    var num2 = Number(window.prompt("Informe um número: "));


    if (num2 > num1) {
        document.getElementById("resultado").innerHTML = ("Ordem crescente: " + num1 + "<" + num2);

    } else if (num1 > num2) {
        document.getElementById("resultado").innerHTML = ("Ordem crescente: " + num2 + "<" + num1);

    } else if (num1 = num2) {
        document.getElementById("resultado").innerHTML = ("Os números são iguais: " + num2 + "=" + num1);

    }
}


function ativ_02() {
    var peso_ideal;

    var altura = Number(window.prompt("Informe a altura (ex:1.80): "));
    var genero = window.prompt("informe o gênero (M-masculino/F-Feminino): ");

    if (genero == "M") {
        peso_ideal = (72.7 * altura) - 58;

    }
    if (genero == "F") {
        peso_ideal = (62.1 * altura) - 44.7;

    }
    if (genero != ("M" | "F")) {
        document.getElementById("resultado").innerHTML = ("Erro");
    }
    document.getElementById("resultado").innerHTML = ("Peso ideal: " + peso_ideal);
}

function ativ_03() {



    var n1 = Number(window.prompt("Informe o 1° número: "));
    var n2 = Number(window.prompt("Informe o 2° número: "));
    var n3 = Number(window.prompt("Informe o 3° número: "));
    var menor;

    menor = n1;

    if (n2 < menor) {
        menor = n2;
    }

    if (n3 < menor) {
        menor = n3;
    }
    //outra maneira de fazer
    /* if(n1 < (n2 & n3)){

        menor = n1;
    }

    if(n2 < (n1 & n3)){

        menor = n2;

    }
    if(n3 < (n1 & n2)){

        menor = n3;

    } */
    document.getElementById("resultado").innerHTML = ("Menor número: " + menor);

}


function ativ_04() {
    var num = Number(window.prompt("Informe um número inteiro: "));
    if (num >= 0) {
        if (num % 2 == 0) {
            document.getElementById("resultado").innerHTML = ("O número " + num + " é par ");

        } else {
            document.getElementById("resultado").innerHTML = ("O número " + num + " é ímpar ");

        }
    } else {
        var positivo = num * (-1);
        document.getElementById("resultado").innerHTML = ("O valor absoluto de " + num + " é: " + positivo);

    }


}

function ativ_05() {

    var num = Number(window.prompt("Digite um número para verificar se ele é divísivel por 2 e por 3: "));
    if (num % 2 == 0 && num % 3 == 0) {
        document.getElementById("resultado").innerHTML = ("O número " + num + " é divísivel por 2 e por 3!");
    }
    else if (num % 2 == 0 && num % 3 != 0) {
        document.getElementById("resultado").innerHTML = ("O número " + num + " é divísivel por 2 e não é divisivel por 3!");
    }
    else if (num % 3 == 0 && num % 2 != 0) {
        document.getElementById("resultado").innerHTML = ("O número " + num + " é divísivel por 3 e não é divisivel por 2!");
    } else {
        document.getElementById("resultado").innerHTML = ("O número " + num + " não é divísivel por 2 e nem por 3!");
    }


}

function ativ_06() {
    var num = Number(window.prompt("Digite um número inteiro para verificar se ele é divísivel por 2 ou por 7: "));


    if (num % 2 == 0) {
        document.getElementById("resultado").innerHTML = ("O número " + num + " é divísivel por 2!");
    }
    else if (num % 7 == 0) {
        document.getElementById("resultado").innerHTML = ("O número " + num + " é divísivel por 7.");
    }
}


function ativ_07() {
    var num_dia = Number(window.prompt("Informe um número:"));

    switch (num_dia) {
        case 1:
            resultado = "Domingo";
            break;

        case 2:
            resultado = "Segunda-Feira";
            break;

        case 3:
            resultado = "Terça-Feira";
            break;

        case 4:
            resultado = "Quarta-Feira";
            break;

        case 5:
            resultado = "Quinta-Feira";
            break;

        case 6:
            resultado = "Sexta-Feira";
            break;

        case 7:
            resultado = "Sábado";
            break;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function ativ_08() {

    var soma = 0;
    for (var i = 2; i <= 20; i += 2) {
        soma = soma + i;
    }
    document.getElementById("resultado").innerHTML = ("A soma dos valores pares existentes entre 1 e 20 é: " + soma);
}

//Dando erro,só imp
function ativ_09() {
    var num = parseInt(window.prompt("Informe um número para ver a tabuada: "));
    var tabuada = '';

    for (var i = 1; i <= 10; i++) {
        tabuada += num + " X " + i + " = " + (num * i) + "<br>"
        document.getElementById("resultado").innerHTML = (tabuada);

    }

}

function ativ_10() {
    var num = parseInt(window.prompt("Digite um número inteiro para calcular o fatorial: "));
    var fat = 1;
    var aux = num;

    if (num >= 0) {
        while (num > 1) {
            fat *= num;
            num -= 1;
        }
        document.getElementById("resultado").innerHTML = ("Fatorial de " + aux + " = " + fat);
    }
    else {
        document.getElementById("resultado").innerHTML = ("Número inválido!!!");
    }
}




