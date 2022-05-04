import {Shape} from "./Shape";

class Circle extends Shape{
    protected radius : number
    constructor(color: string,
                filled: boolean,
                radius: number) {
        super(color,filled);
        this.radius = radius;
    }
    public getRadius():number{
        return this.radius;
    }
    public setRadius(radius:number):void{
        this.radius = radius;
    }
    public getArea():number{
        return this.radius*this.radius*Math.PI;
    }
    public getPerimeter():number{
        return 2 * this.radius*Math.PI;
    }
    public toString(): string {
        return `A Circle with ${this.getRadius()} which is a subclass of ` + super.tostring()
    }
}
let circle = new Circle(`indigo`,false, 3.5)
// console.log(circle.toString())
// console.log(circle.getArea())
// console.log(circle.getPerimeter())