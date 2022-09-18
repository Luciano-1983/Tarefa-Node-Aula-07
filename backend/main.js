var express=require("express");
var bodyParser = require('body-parser');
const database=require("./database/database.local");
//middleware - irá fazer um parser do dados do front e formatar em req.body
var app=express();
const PORT=3000;
//define o uso do body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/getInfo", function(req,res){
    res.json({ user: 'geekxxx' });
    
});
app.post("/clientes/salvar", function(req,res){
    console.log(req.body);
    database.gravarDados({senha:req.body.senha,
                          nome:req.body.nome,
                          telefone:req.body.telefone,
                          celular:req.body.celular,
                          datanasc:req.body.datanasc,
                          email:req.body.email,
                          fumante:req.body.fumante,
                          municipio:req.body.municipio,
                          sexo:req.body.sexo});
    res.status(201).send("Ok - Created");
    
});

app.get("/clientes/listar", function(req,res){
    const dados=database.buscaTodosDados();
    console.log(dados);
    res.status(200).send(dados);
    
});

app.get("/clientes/listar/:key", function(req,res){
    const key=req.params.key;
    const dados=database.buscaDados(key);
    console.log(dados);
    res.status(200).send(dados);
    
});

app.listen(PORT,function(){
    console.log("Servidor-Backend está rodando na porta: "+PORT);
})