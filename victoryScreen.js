export class Victory{
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = this.game.width;
        this.height = this.game.height;
    }
    draw(context){
        context.fillStyle = 'black';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.textAlign = 'center';
        context.fillStyle = 'white';
        context.font = '40px times new roman'
        context.fillText('Victory',this.width/2, this.height/2);
    }
}