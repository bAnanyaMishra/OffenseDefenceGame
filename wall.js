class wall{
    constructor(x,y){
        this.xposition=x
        this.yposition=y
        this.width=20
        this.height=599
    }
    display(){
        rect(this.xposition,this.yposition,this.width,this.height);
      }
}
