const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var placarpc = 0;
var placaruser = 0;


rl.question('Em qual dificuldade você deseja jogar? 1: Fácil e 2: Difícil ', (answer1) => {
    if(answer1 == 1){
    rl.setPrompt('Você escolhe 1 ou 0?> ');
    rl.prompt();

    rl.on('line', function(line) {
        var lancedopc = Math.round(Math.random());

        if (line == lancedopc){
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
    if(answer1 == 2){
        rl.question('Please enter the second number : ', (answer2) => {
            var result = (+answer1) + (+answer2);
            console.log(`The sumaaaaaaaa of above two numbers is ${result}`);
            rl.close();
        });
    }
});