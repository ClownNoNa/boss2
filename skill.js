class Skill{
    constructor(game){
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 10;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.maxFrame = 0;
        this.markedForDeletion = false;
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
        context.strokeRect(this.x, this.y,20, 20);
        context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.gameWidth, this.gameHeight);
    }
}

export class SkillOfPlayer extends Skill{
    constructor(game,x,y){
        super();
        this.width = 173;
        this.height = 173;
        this.gameWidth = 20;
        this.gameHeight = 20;
        this.game = game;
        this.x = x;
        this.y = y;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 0;
        this.timer = 0;
        this.image = document.getElementById('pokeball');
    }
    update(deltaTime){
        super.update(deltaTime);
        this.timer++;
        if(this.timer>500){
            this.x = this.game.player.x;
            this.markedForDeletion = true;
            this.timer = 0;
        }
    }
}