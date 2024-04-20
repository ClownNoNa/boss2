class item{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        
    }
    draw_image(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    draw_detail(context){
        context.textAlign = 'left';
        context.fillStyle = 'black';
        context.font = '20px time new roman'
        context.fillText(this.detail,this.game.mainbar.detailX,this.game.mainbar.detailY);
    }
}
export class LP_bottle extends item{
    constructor(game){
        super(game);
        this.detail = 'Một lọ thuốc hồi phục 10LP';
        this.image = document.getElementById('lp');
        this.x = 0;
        this.y = 0;
    }
    draw_image(context,x,y){
        this.x = x;
        this.y = y;
        super.draw_image(context);
    }
    draw_detail(context){
        super.draw_detail(context);
    }
}
export class Gold extends item{
    constructor(game){
        super(game);
        this.detail = 'Một vật phẩm quý giá có thể trao đổi mua bán';
        this.image = document.getElementById('gold');
        this.x = 0;
        this.y = 0;
    }
    draw_image(context,x,y){
        this.x = x;
        this.y = y;
        super.draw_image(context);
    }
    draw_detail(context){
        super.draw_detail(context);
    }
}
export class Pokeball extends item{
    constructor(game){
        super(game);
        this.detail = 'vật phẩm để đánh boss';
        this.image = document.getElementById('pokeball');
        this.x = 0;
        this.y = 0;
    }
    draw_image(context,x,y){
        this.x = x;
        this.y = y;
        super.draw_image(context);
    }
    draw_detail(context){
        super.draw_detail(context);
    }
}