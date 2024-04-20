export class BattleBoss{
    constructor(game){
        this.hp = 10;
        this.game = game;
        this.width = 85;
        this.height = 94;
        this.x = 0;
        this.y = this.game.height/2;
        this.image = document.getElementById('boss1');
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 3;
        this.fps = 10;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.speed = 1;
        this.angleSpeed = 0.2;
        this.angle = 0;
        this.hit = false;
    }
    update(deltaTime){
        // movement
        this.checkCollision();
        if(this.hp>7 && this.hp<=10){
            this.x = this.game.width/2 * Math.cos(this.angle * Math.PI/90) + (this.game.width/2 - this.width/2);
            this.y = this.game.height/2 * Math.sin(this.angle * Math.PI/90) + (this.game.height/2 - this.height/2);
            this.angle += this.angleSpeed;
            
        }
        else if(this.hp>4 && this.hp<=7){
            this.x = this.game.width/2 * Math.cos(this.angle * Math.PI/180) + (this.game.width/2 - this.width/2);
            this.y = this.game.height/2 * Math.sin(this.angle * Math.PI/90) + (this.game.height/2 - this.height/2);
            this.angleSpeed = 0.5;
            this.width = 122;
            this.height = 110;
            this.image = document.getElementById('boss2')
            this.angle += this.angleSpeed;
        }else {
            this.x = this.game.width/2 * Math.cos(this.angle * Math.PI/270) + (this.game.width/2 - this.width/2);
            this.y = this.game.height/2 * Math.sin(this.angle * Math.PI/90) + (this.game.height/2 - this.height/2);
            this.angleSpeed = 0.8;
            this.width = 87;
            this.height = 110;
            this.image = document.getElementById('boss3')
            this.angle += this.angleSpeed;
        }
        if(this.hp <= 0){
            this.game.changeBossScreen = false;
            this.game.changeVictoryScreen = true;
        }

        //sprite animation
        if (this.frameTimer > this.frameInterval){
            this.frameTimer =0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }else {
            this.frameTimer += deltaTime;
        }
    }
    draw(context){
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    checkCollision(){
        this.game.listSkill.forEach(skill => {
            if(
                skill.x < this.x + this.width &&
                skill.x + skill.gameWidth > this.x &&
                skill.y < this.y + this.height &&
                skill.y + skill.gameHeight > this.y
            ){
                this.hit = true;
                this.hp--;
                
                console.log(this.hit);
                console.log(this.hp);
            }else {
                
                this.hit = false;
            }
        });
    }
}