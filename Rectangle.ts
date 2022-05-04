import {Shape} from "./Shape";

export class Rectangle extends Shape{
    public width : number;
    public length : number;

    constructor(color: string,
                filled: boolean,
                width: number,
                length: number) {
        super(color,filled);
        this.width = width;
        this.length = length;
    }
    public getWidth():number{
        return this.width;
    }
    public setWidth(width:number):void{
        this.width = width;
    }
    public getLength():number{
        return this.length;
    }
    public setLength(length : number){
        this.length = length;
    }
    public getArea():number{
        return this.length*this.width;
    }
    public getPerimeter():number{
        return 2*(this.width+this.length);
    }
    public toString(): string {
        return `A Rectangle with width = ${this.getWidth()} `
            + `and `
            + ` length = ${this.getLength()}`
            + super.toString();
    }
}
let rectangle = new Rectangle(`orange`,true,2.5,3.8)

console.log(rectangle)
console.log(rectangle.toString());
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter())