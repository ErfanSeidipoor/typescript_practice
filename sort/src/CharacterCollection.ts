export class CharacterCollection {

  constructor(public data: string) {}

  get length():number {
    return this.data.length
  }

  compare(i: number, j:number): boolean {
    return this.data.split("")[i].toLowerCase()>this.data.split("")[j].toLowerCase()
  }

  swap(i:number, j:number):void {
    const spliteData = this.data.split("")
    const temp = spliteData[i]
    spliteData[i] = spliteData[j]
    spliteData[j] = temp
    this.data = spliteData.join("")
  }
}

// interface Sortable {
//   length: number,
//   compare(i:number, j:number):boolean;
//   swap(i: number, j:number): void; 
// }
