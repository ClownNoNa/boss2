export class FloatingMessage{
    constructor(value,x,y){
        this.value = value;
        this.x = x;
        this.y = y;
        this.markedForDeletion = false;
        this.timer = 0;
    }
    update(){
        this.timer++;
        if(this.timer > 200) this.markedForDeletion = true;
    }
    draw(context){
        context.font = '10px times new roman';
        context.fillStyle = 'black';
        context.fillText(this.value, this.x, this.y);
        context.fillStyle = 'white';
        context.fillText(this.value, this.x+2, this.y+2);
    }
}