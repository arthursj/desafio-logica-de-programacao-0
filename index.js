function partidasRankeadas(vitoriais, derrotas) {
    let condicao = vitoriais - derrotas;
    return condicao;
};

// Variável que iremos inserir o valor em cada condição
let nivel = '';

if (saldo < 10) {
    nivel = "Ferro";
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

else if (saldo === 11 || saldo <= 20) {
    nivel = "Bronze";
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

else if (saldo === 21 || saldo <= 50) {
    nivel = "Prata";
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

else if (saldo === 51 || saldo <= 80) {
    nivel = "Ouro";
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

else if (saldo === 81 || saldo <= 90) {
    nivel = "Diamante";
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

else if (saldo === 91 || saldo <= 100) {
    nivel = "Lendário";
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

else if (saldo != saldo) {
    console.log("Digite um número nem que seja em string")
}

else {
    nivel = "Imortal";
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

// Chamando a função
let saldo = partidasRankeadas("400", "100"); // Passe o valor para subtrair e retornar alguma msg