export class Shape{
    protected color : string = "green";
    protected filled: boolean = true;

    constructor(color: string,
                filled: boolean) {
    this.color = color;
    this.filled = filled;
    }

    public getColor(): string{
        return this.color
    }
    public setColor(color:string): void{
        this.color = color
    }
    public getFilled(): boolean{
        return this.filled
    }
    public setFilled(filled : boolean):void{
        this.filled = filled
    }
    public toString():string{
        return `A Shape with color of ` + (this.color+ `and`+ this.getFilled ? "filled" : "not filled");
    }
}
let shape = new Shape(`red`,false);
// console.log(shape);
// console.log(shape.toString())