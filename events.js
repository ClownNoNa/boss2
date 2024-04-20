

var chest_sound = document.getElementById('chestsound');

class Event{
    constructor(game){
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 5;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.maxFrame = 0;
        this.markForEvent = false;
        this.endEvent = false;
    }
    update(deltaTime){
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if(this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }else{
            this.frameTimer += deltaTime;
        }
    }
    draw(context){
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.game.player.width, this.game.player.height);
    }
}
export class Chest extends Event{
    constructor(game){
        super();
        this.game = game;
        this.image = document.getElementById('chest');
        this.width = 47;
        this.height = 47;
        this.x = 448;
        this.y = 448;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 3;
        this.floatmess = false;
    }
    update(input,deltaTime){
        if(this.markForEvent && input.includes('Enter')&&this.endEvent === false){
            chest_sound.play();
            this.frameY = this.maxFrame;
            //add item
            this.game.mainbar.items.push(addItem(this.game.mainbar,1));
            if(this.frameY = this.maxFrame){
                this.endEvent = true;
                this.floatmess = true;
            }
        };
    }
}
export class Boss extends Event{
    constructor(game){
        super();
        this.game = game;
        this.image = document.getElementById('boss');
        this.width = 45;
        this.height = 51;
        this.x = 0;
        this.y = 400;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 3;
        this.floatmess = false;
    }
    update(input,deltaTime){
        super.update(deltaTime);
        if(this.markForEvent && this.game.mainbar.items.includes(this.game.mainbar.Listitems[1])){
            this.game.changeBossScreen = true;
            
        }else if(this.markForEvent){
            this.floatmess = true;
        }else{
            this.floatmess = false;
        }
    }
}
// bar is mainbar, index is indexof item in listofitem
function addItem(bar,index){
    return bar.Listitems[index];
}