import { Top_Left, Top_Right, Top, Left, Bottom, Right, Bottom_Left, Bottom_Right, Midle } from "./background.js";
import { Player } from "./player.js";
import { Control } from "./control.js";
import { Chest, Boss } from "./events.js";
import { BossScreen } from "./boss_screen.js";
import { MainBar } from "./taskbar.js";
import { FloatingMessage } from "./floatmess.js";
import { BattleBoss } from "./boss.js";
import { GameOver } from "./gameOverScreen.js";
import { Victory } from "./victoryScreen.js";
var bgrMussic = document.getElementById('mainmussic');
var bossMussic = document.getElementById('bossmusic');


// let bgrMussic = new Audio('./assets/sound/main.mp3');
bgrMussic.loop = true;

window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 512;

    class Game{
        constructor(width,height){
            this.width = width;
            this.height = height;
            this.background = [new Top_Left(this), new Top(this), new Top_Right(this), new Left(this), new Midle(this), new Right(this), new Bottom_Left(this), new(Bottom), new Bottom_Right(this)];
            this.titleSize = 128;
            this.changeVictoryScreen = false;
            this.vitoryScreen = new Victory(this);
            this.gameOverScreen = new GameOver(this);
            this.player = new Player(this);
            this.control = new Control(this);
            this.mainbar = new MainBar(this);
            this.boss = new BattleBoss(this);
            this.bossscreen = new BossScreen(this);
            this.events =[];
            this.listSkill = [];
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter(0);
            //add event
            this.events.push(new Chest(this));
            this.events.push(new Boss(this));
            this.changeBossScreen = false;
            this.changeBarScreen = false;
            this.gameOver = false;
            //setting floatmesschest
            this.floatmessBoss = new FloatingMessage('You need pokeball',this.events[1].x,this.events[1].y);
            this.floatmessChest = new FloatingMessage('+1 gold',this.events[0].x,this.events[0].y);
        }
        update(deltaTime){
            bgrMussic.play();
            if(this.changeBarScreen === false && this.changeBossScreen === false){
                this.player.update(this.control.keys,deltaTime);
            this.events.forEach(event => {
                event.update(this.control.keys,deltaTime);
                if(event.floatmess)this.floatmessChest.update();    
            });
            }
            if(this.changeBarScreen)this.mainbar.update(this.control.keys);
            if(this.changeBossScreen) {
                bgrMussic.pause();
                bossMussic.play();
                this.player.update(this.control.keys,deltaTime);
                this.boss.update(deltaTime);
                this.bossscreen.update();
                this.events = [];
                this.listSkill.forEach(skill=>{
                    skill.update(deltaTime);
                    if(skill.markedForDeletion){
                        this.listSkill.splice(this.listSkill.indexOf(skill), 1);
                    }
                })
                if(this.boss.hit === true){
                    this.listSkill.splice(0,1);
                }
            }
            if(this.gameOver){
                bgrMussic.pause();
                bossMussic.pause();
            }
            if(this.changeVictoryScreen){
                bgrMussic.pause();
                bossMussic.pause();
            }
        }
        draw_screen1(context){
            //floor - Có thể rút gọn(ngiên cứu sau)
            this.background[0].draw(context,0,0);
            this.background[1].draw(context,this.titleSize*1,0);
            this.background[1].draw(context,this.titleSize*2,0);
            this.background[2].draw(context,this.titleSize*3,0);
            this.background[3].draw(context,0,this.titleSize*1);
            this.background[3].draw(context,0,this.titleSize*2);
            this.background[4].draw(context,this.titleSize*1,this.titleSize*1);
            this.background[4].draw(context,this.titleSize*1,this.titleSize*2);
            this.background[4].draw(context,this.titleSize*2,this.titleSize*1);
            this.background[4].draw(context,this.titleSize*2,this.titleSize*2);
            this.background[5].draw(context,this.titleSize*3,this.titleSize*1);
            this.background[5].draw(context,this.titleSize*3,this.titleSize*2);
            this.background[6].draw(context,0,this.titleSize*3);
            this.background[7].draw(context,this.titleSize*1,this.titleSize*3);
            this.background[7].draw(context,this.titleSize*2,this.titleSize*3);
            this.background[8].draw(context,this.titleSize*3,this.titleSize*3);
            //player
            this.player.draw(context);
            //event
            this.events.forEach(event =>{
                event.draw(context);
                if(this.floatmessBoss.markedForDeletion === false && event.floatmess) this.floatmessBoss.draw(context);
                if(this.floatmessChest.markedForDeletion === false && event.floatmess) this.floatmessChest.draw(context);
            });
        }
        draw_screen2(context){
            this.bossscreen.draw(context);
            this.boss.draw(context);
            this.player.draw(context);
            this.listSkill.forEach(skill=>{
                skill.draw(context);
            });
        }
        draw_screen3(context){
            this.mainbar.draw(context);
        }
        draw_screen4(context){
            this.gameOverScreen.draw(context);
        }
        draw_screen5(context){
            this.vitoryScreen.draw(context);
        }
    }
  

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0,0,canvas.width, canvas.height)
        game.update(deltaTime);
        if(game.changeBossScreen){
            game.draw_screen2(ctx);
        }else if(game.changeBarScreen){
            game.draw_screen3(ctx);
        }else if(game.gameOver){
            game.draw_screen4(ctx);
        }else if(game.changeVictoryScreen){
            game.draw_screen5(ctx);
        }else {
            game.draw_screen1(ctx);
        }
        
        requestAnimationFrame(animate);
    }
    animate(0);
});