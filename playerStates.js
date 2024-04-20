const states = {
    IDLE: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4
}
class State {
    constructor(state, game){
        this.state = state;
        this.game = game;
    }
}
export class Idle extends State{
    constructor(game){
        super('IDLE', game);
    }
    enter(y){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 0;
        this.game.player.frameY = y;
    }
    handleInput(input){
        if (input.includes('a')){
            this.game.player.setState(states.LEFT);
        }
        if (input.includes('d')){
            this.game.player.setState(states.RIGHT);
        }
        if (input.includes('w')){
            this.game.player.setState(states.UP);
        }
        if (input.includes('s')){
            this.game.player.setState(states.DOWN);
        }
    }
}
export class Left extends State{
    constructor(game){
        super('LEFT', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 1;
        
    }
    handleInput(input){
        if (!input.includes('a')){
            this.game.player.setState(states.IDLE,1);
        }
    }
}
export class Right extends State{
    constructor(game){
        super('RIGHT', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 2;
        
    }
    handleInput(input){
        if (!input.includes('d')){
            this.game.player.setState(states.IDLE,2);
        }
    }
}
export class Up extends State{
    constructor(game){
        super('UP', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 3;
        
    }
    handleInput(input){
        if (!input.includes('w')){
            this.game.player.setState(states.IDLE,3);
        }
    }
}
export class Down extends State{
    constructor(game){
        super('DOWN', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 0;
        
    }
    handleInput(input){
        if (!input.includes('s')){
            this.game.player.setState(states.IDLE,0);
        }
    }
}