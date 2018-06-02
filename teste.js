const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var placarpc = 0;
var placaruser = 0;
var contador = 0;

var lance00 = 0;
var lance01 = 0;
var lance10 = 0;
var lance11 = 0;

var primeirolance = Math.round(Math.random());

var a = 22695477;
var b = 1;
var m = Math.pow(2, 32);
var x0 = 0;
var parametro = Math.pow(2, 31);




rl.question('Quantas rodadas o jogo terá? : ', (jogadas) => {
    rl.question('Em qual dificuldade você deseja jogar? 1: Fácil e 2: Difícil ', (dificuldade) => {
        if(dificuldade == 1){
            console.log("VOCÊ ESTÁ NO FÁCIL");
            rl.setPrompt('Você escolhe 1 ou 0?> ');
            rl.prompt();
            rl.on('line', function(lance) {
    
                //Gerar um numero aleatório a partir de uma congruência linear
                x1 = (((a*x0+b)) % m);
                x0 = x1;

                if(x1 < parametro){
                    lancedopc = 0;
                }else
                    lancedopc = 1;
    
                if (lance == lancedopc){
                    placarpc++;   
                }else{
                    placaruser++;
                }
    
                console.log("O computador tem " + placarpc + " pontos");
                console.log("O usuário tem " + placaruser + " pontos");
                
                //Ocorre uma jogada que é contada.
                contador++;

                //Quando o contador chega no numero de jogadas inserida pelo usuário o jogo acaba.
                if(contador == jogadas){
                    if(placarpc > placaruser){
                        console.log("A maquina venceu!");rl.close();
                        rl.prompt();
                    }else{
                        console.log("O usuário venceu!");rl.close();
                        rl.prompt();
                    }
                } 
    
                }).on('close',function(){
                process.exit(0);
                });
        }});
});


