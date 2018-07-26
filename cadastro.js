const fs = require ("fs");
let cadstro = process.argv[2];

fs.appendFile('pessoas.json', '', function(erro, sucesso) {
    if(erro){
        console.log("node cadastro.js salvar <nome> <email> ");
    }
    else if(sucesso){
        console.log("node cadastro.js buscar-todos <nome>")
    }
    else{
        console.log("node cadastro.js buscar <nome>");
    }
});