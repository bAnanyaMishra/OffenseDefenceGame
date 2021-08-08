class block{
    constructor(x,y){
        this.xposition=x
        this.yposition=y
        this.width=10
        this.height=150
    }
    display(){
        rect(this.xposition,this.yposition,this.width,this.height);
      }
}
