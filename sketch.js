var datebase;
var canvas;
var allPlayers;
var form,player,game,playerCount;
var gameState=0;


function setup(){
    database=firebase.database();
    canvas=createCanvas(500,500);

    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }

}
