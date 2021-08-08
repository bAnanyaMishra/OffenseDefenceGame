class shoot{
    constructor(x,y){
        this.xposition=x
        this.yposition=y
        this.width=10
        this.height=70
    }
    display(){
        rect(this.xposition,this.yposition,this.width,this.height);
        //this.shapeColor="red"
      }
}
