import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numCollection = new NumbersCollection([10, 5, -3, 4]);
numCollection.sort();
console.log(numCollection.data)
// const sorter = new Sorter(numCollection);
// sorter.sort();
// console.log(numCollection.data);

const charCollection = new CharactersCollection('LKDdfnkaJ');
// const charSorter = new Sorter(charCollection);
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(5);
linkedList.add(-50);

// const llSorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();