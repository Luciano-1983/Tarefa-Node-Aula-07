
//https://github.com/lmaccherone/node-localstorage
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./database/db');

function gravarDados(dados) {
    console.log(dados);
    localStorage.setItem('myKey',JSON.stringify(dados));
    return true;
}

function buscaTodosDados() {
    return JSON.parse(localStorage.getItem('myKey'));
}

function buscaDados(key) {
    return JSON.parse(localStorage.getItem(key));
}

module.exports={
    gravarDados,
    buscaDados,
    buscaTodosDados
}