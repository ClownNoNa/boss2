import { Idle, Up, Down, Left, Right } from "./playerStates.js";
import { SkillOfPlayer } from "./skill.js";
export class Player{
    constructor(game){
        this.game = game;
        this.width = 64;
        this.height = 64;
        this.x = 224;
        this.y = 224;
        this.image = document.getElementById('player');
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 0;
        this.fps = 10;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.speed = 1;
        this.skill_on = false;
        
        this.states = [new Idle(this.game), new Left(this.game), new Right(this.game), new Up(this.game), new Down(this.game)];
    }
    update(input, deltaTime){
        this.speed = 2;
        this.checkCollision();
        this.currentState.handleInput(input);
        //input
        if(input.includes('d')) this.x = this.x + this.speed;
        else if(input.includes('a'))  this.x = this.x - this.speed;
        else if(input.includes('w'))  this.y = this.y - this.speed;
        else if(input.includes('s'))  this.y = this.y + this.speed;
        else if(input.includes('t')&&this.game.changeBossScreen === false)  this.game.changeBarScreen = true;
        //check out screen
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if (this.y < 0) this.y = 0;
        if (this.y > this.game.height - this.height) this.y = this.game.height - this.height;
        //sprite animation
        if (this.frameTimer > this.frameInterval){
            this.frameTimer =0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }else {
            this.frameTimer += deltaTime;
        }
        //battle boss
        if(input.includes('Enter')&&this.game.changeBossScreen === true){
            if(this.game.listSkill.length<1){
                this.game.listSkill.push(new SkillOfPlayer(this.game,this.x,this.y));
            }
        }
       
        
    }
    draw(context){
        
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    setState(state,y){
        this.currentState = this.states[state];
        this.currentState.enter(y);
    }
    checkCollision(){
        this.game.events.forEach(event => {
            if(
                event.x < this.x + this.width &&
                event.x + event.width > this.x &&
                event.y < this.y + this.height &&
                event.y + event.height > this.y
            ){
                this.speed = 0;
                event.markForEvent = true;
                if(this.currentState === this.states[1]){
                    this.x = this.x + 2;
                }
                if(this.currentState === this.states[2]){
                    this.x = this.x - 2;
                }
                if(this.currentState === this.states[3]){
                    this.y = this.y + 2;
                }
                if(this.currentState === this.states[4]){
                    this.y = this.y - 2;
                }
            }else {
                event.markForEvent = false;
            }
        });
        if(
            this.game.boss.x < this.x + this.width &&
                this.game.boss.x + this.game.boss.width > this.x &&
                this.game.boss.y < this.y + this.height &&
                this.game.boss.y + this.game.boss.height > this.y
        ){
            this.game.changeBossScreen = false;
            this.game.gameOver = true;
        }
    }
}