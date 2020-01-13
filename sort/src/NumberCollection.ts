export class NumberCollection {  
  constructor( public data: number[]) {}

  get length():number {
    return this.data.length
  }
  
  swap(i:number, j:number):void {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  compare(i:number, j:number):boolean {
    return this.data[i]>this.data[j]
  }
}