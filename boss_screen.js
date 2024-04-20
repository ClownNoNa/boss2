export class BossScreen{
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Times New Roman';
        this.heartImage = document.getElementById('heartsteel');
        this.lifeNum = 10;
    }
    update(){
        this.lifeNum = this.game.boss.hp;

    }
    draw(context){
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = 'white';
        context.fillRect(0,0,300,40);
        context.fillStyle = 'black';
        context.fillText('Life: ',20,30);
        for(let i = 0; i<this.lifeNum ;i++){
            context.drawImage(this.heartImage,80+20*i,5,30,30);
        }
        if(this.lifeNum<=0){
            context.textAlign = 'center';
            context.fillStyle = 'black';
            context.fillText('You Win; Thanks for playing',this.game.width/2,this.game.height/2);
        }
    }
}