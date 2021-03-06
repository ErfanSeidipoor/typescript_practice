

export class Sorter {
  collection: number[] | string

  constructor(collection: number[] | string) {
    this.collection = collection
  }

  sort_():void {
    const { length } = this.collection

    if (this.collection instanceof Array) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length-i-1; j++) {
          if (this.collection[j] > this.collection[j+1]) {
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j+1]
            this.collection[j+1] = leftHand
          }
        }
      }
    }

    if (typeof this.collection === 'string') {
      
    } 
  }
}