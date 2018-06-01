const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var placarpc = 0;
var placaruser = 0;

var lance00 = 0;
var lance01 = 0;
var lance10 = 0;
var lance11 = 0;

var lanceMaquina = 0;

var primeirolance = Math.round(Math.random());

rl.question('Em qual dificuldade você deseja jogar? 1: Fácil e 2: Difícil ', (dificuldade) => {
    //Fácil
    if(dificuldade == 1){
        console.log("VOCÊ ESTÁ NO FÁCIL");
        rl.setPrompt('Você escolhe 1 ou 0?> ');
        rl.prompt();
        rl.on('line', function(lance) {
            var lancedopc = Math.round(Math.random());

            if (lance == lancedopc){
                placarpc++;   
            }else{
                placaruser++;
            }

            console.log("O computador tem " + placarpc + " pontos");
            console.log("O usuário tem " + placaruser + " pontos");

            if(placarpc >= 3){
                console.log("A maquina venceu!");
            }
            if(placaruser >= 3){
                console.log("O usuário venceu!");
            }
            if(placarpc >= 3 || placaruser >= 3) rl.close();
            rl.prompt();

            }).on('close',function(){
            process.exit(0);
            });
    }
    //Difícil
    if(dificuldade == 2){
        console.log("VOCÊ ESTÁ NO DIFÍCIL");
        rl.setPrompt('Você escolhe 1 ou 0?> ');
        rl.prompt();

        rl.on('line', function(segundolance) {
    
        if(primeirolance == 0 && segundolance == 0){
            lance00++;
        }
        if(primeirolance == 0 && segundolance == 1){
            lance01++;
        }
        if(primeirolance == 1 && segundolance == 0){
            lance10++;
        }
        if(primeirolance == 1 && segundolance == 1){
            lance11++;
        }

        if (segundolance == 0){
            if(lance10 > lance00){
                lanceMaquina == 1;
            }
            if(lance10 > lance00){
                lanceMaquina == 0;
            }
            if(lance10 = lance00){
                lanceMaquina = Math.round(Math.random());
            }   
        }
        if (segundolance == 1){
            if(lance11 > lance01){
                lanceMaquina == 1;
            }
            if(lance11 > lance01){
                lanceMaquina == 0;
            }
            if(lance11 = lance01){
                lanceMaquina = Math.round(Math.random());
            }   
        }

        if (segundolance == lanceMaquina){
            placarpc++;   
        }else{
            placaruser++;
        }

        primeirolance = segundolance;

        console.log("O computador tem " + placarpc + " pontos");
        console.log("O usuário tem " + placaruser + " pontos");

        if(placarpc >= 3){
            console.log("A maquina venceu!");
        }
        if(placaruser >= 3){
            console.log("O usuário venceu!");
        }
        if(placarpc >= 3 || placaruser >= 3) rl.close();
        rl.prompt();

        }).on('close',function(){
        process.exit(0);
        });
    }
});