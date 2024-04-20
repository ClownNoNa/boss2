export class Top_Left{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_1');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Top{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_2');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Top_Right{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_3');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Right{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_6');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Left{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_4');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Midle{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_5');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Bottom{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_8');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Bottom_Left{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_7');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}
export class Bottom_Right{
    constructor(game){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.image = document.getElementById('floor_title_9');
        this.x = 0;
        this.y = 0;
    }
    draw(context,x,y){
        context.drawImage(this.image, x, y, this.width, this.height)
    }
}