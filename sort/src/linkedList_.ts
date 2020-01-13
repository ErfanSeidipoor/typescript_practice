
import {Sorter} from './Sorter__'


class Mode{
  next: Mode | null = null;
  constructor(public data:number) {}
}

export default class LinkedList  extends Sorter{
  head: Mode | null = null;
  constructor() {super()}

  add(data: number): void {
    if(!this.head) {
      this.head = new Mode(data)
      return;
    }

    let tail = this.head
    while(tail.next) {
      tail = tail.next
    }
    tail.next = new Mode(data)
  }

  get length():number {
    if (!this.head) return 0
    let mode = this.head;
    let length = 1;
    while(mode.next) {
      length +=1
      mode = mode.next
    }
    return length
  }

  at(i:number): Mode  {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }
    
    let mode: Mode | null = this.head;
    let count = 1;
    while(mode) {
      if (count===(i+1)) {
        return mode
      }
      count +=1
      mode = mode.next
    }

    throw new Error('Index out of bounds')
  }

  compare(i:number, j:number):boolean {
    if (!this.head) {
      throw new Error('List is Empty')
    }
    return this.at(i).data > this.at(j).data 
  }

  swap(i:number, j:number): void {
    if (!this.head) {
      throw new Error('List is Empty')
    }
    const temp = this.at(i).data;
    this.at(i).data = this.at(j).data;
    this.at(j).data = temp
  }

  print():void {
    let output = '['
    for (let i = 0; i < this.length; i++) {
      output += ' ' + this.at(i).data
    }
    output += ' ]'
    console.log(output)
  }
}