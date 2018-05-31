var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var placarpc = 0;
var placaruser = 0;


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