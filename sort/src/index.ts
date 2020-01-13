import { Sorter} from './Sorter'
import { NumberCollection } from './NumberCollection'
import NumberCollection_ from './NumberCollection_'
import { CharacterCollection } from './CharacterCollection'
import  CharacterCollection_ from './CharacterCollection_'
import  LinkedList  from './LinkedList'
import  LinkedList_  from './LinkedList_'

const collection = new NumberCollection([10,1,3,9,4,120])
const sorter = new Sorter(collection)
sorter.sort()
console.log(sorter.collection);

const collection_ = new CharacterCollection("erfanSeidipoor")
const sorter_ = new Sorter(collection_)
sorter_.sort()
console.log(sorter_.collection);


const collection__ = new LinkedList()
collection__.add(5)
collection__.add(4)
collection__.add(-3)
collection__.add(2)
collection__.print()

const sorter__ = new Sorter(collection__)
sorter__.sort()
collection__.print()
// (sorter__.collection as LinkedList).print();

console.log('-----   abstract class  --------------')

const collection___ = new NumberCollection_([10,1,3,9,4,120])
collection___.sort()
console.log(collection___.data);

const collection____ = new CharacterCollection_("erfan234Seidipoor")
collection____.sort()
console.log(collection____.data);

const collection_____ = new LinkedList_()
collection_____.add(5)
collection_____.add(4)
collection_____.add(-3)
collection_____.add(2)
collection_____.print()
collection_____.sort()
collection_____.print()