const process = require("process")
const rdl = require("readline")
class LoadingBar {
    constructor(size) {
        this.size = 100
        this.cursor = 0
        this.loaded = 0;
    }
start() {
        process.stdout.write("\x1B[?25l")
        for (let i = 0; i < this.size; i++) {
            process.stdout.write("\u2591")
        }
        rdl.cursorTo(process.stdout,this.size+2);
        process.stdout.write(this.loaded+"%")
    }
printLoaded(){
    if(this.loaded <= this.size){
        rdl.cursorTo(process.stdout,this.size+2);
        process.stdout.write(this.loaded+"%")
    }
    
}
load(percent){
    rdl.cursorTo(process.stdout, this.cursor);
    this.loaded=percent;
    for(let i =this.cursor;i< percent;i++){
        if(this.cursor > this.size){
            return
        }
        process.stdout.write("\u2588")
        this.cursor++;
        
    }

    this.printLoaded();

    

}
}
module.exports=LoadingBar;