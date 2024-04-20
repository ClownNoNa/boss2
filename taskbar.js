import { LP_bottle,Gold ,Pokeball} from "./itemin4.js";

export class MainBar{
    constructor(game){
        this.game = game;
        this.width = 512;
        this.height = 512;
        this.detailX = 110;
        this.detailY = 80;
        this.itemX = 0;
        this.itemY = 40;
        this.itemSize = 100;
        this.Listitems = [this.lp = new LP_bottle(this.game), this.pokeball = new Pokeball(this.game),this.gold = new Gold(this.game)];
        this.items = [this.lp];
        this.currentItem = this.items[0];
        this.strRX = 0;
        this.strRY = 41;
        this.lengtOfItems = 0;
        this.indexOfItem = 0;
        // this.imageGold = document.getElementById('gold');
        // this.imageLPbottle = document.getElementById('lp');
        // this.imagefour_leaf_clover = document.getElementById('leaf');
    }
    update(input){
        //update leng
        this.lengtOfItems = this.items.length;
        //selection
        if(input.includes('s')) {
            this.strRY = this.strRY + this.itemSize;
            for(let i = 0; i<600000000; i++){

            }
        }
        else if(input.includes('w')){
            this.strRY = this.strRY - this.itemSize;
            for(let i = 0; i<600000000; i++){

            }
        }else if(input.includes('Backspace')){
            this.game.changeBarScreen = false;
        }
        //control out screen
        if(this.lengtOfItems === 0){
            this.strRY = -this.itemSize;
        }else{
            if(this.strRY < 41) this.strRY = 41;
        if(this.strRY > 41 + this.itemSize*(this.lengtOfItems-1)) this.strRY = 41 + this.itemSize*(this.lengtOfItems-1);
        }
        //select item
        this.indexOfItem = (this.strRY-41+100)/100;
        
    }
    draw(context){
        context.fillStyle = 'blue';
        context.fillRect(0,0, this.width, this.height);
        context.textAlign = 'left';
        context.font = '40px Time New Roman';
        context.fillStyle = 'black';
        context.fillText('List Item: ',0,40);
        context.font = '20px Time New Roman';
        context.fillText('[press Backspace to return main screen]',180,500);
        context.fillRect(0,40,512,2);
        context.fillRect(100,40,2,512);
        context.strokeRect(this.strRX,this.strRY,100,100);
        //draw item and detail
        if(this.lengtOfItems != 0){
            this.items.forEach(item =>{
                item.draw_image(context,this.itemX,this.itemY+this.itemSize*this.items.indexOf(item));
            });
            this.items[this.indexOfItem-1].draw_detail(context);
        }
        
    }
}