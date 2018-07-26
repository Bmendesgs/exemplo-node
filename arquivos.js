const fs= require("fs");

function tratarleitura(erro, sucesso){
    if(erro){
        console.log("Ihh, deu erro");
        console.log(erro);
    }
    else{
        sucesso=sucesso.toJSON();
        console.log("Arquivo lido com sucesso");
        console.log(sucesso);
    }
}

let texto = fs.readFile('texte.txt', tratarleitura);

console.log("Função executada com sucesso");
console.log(texto);
