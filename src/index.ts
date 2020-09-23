// import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Test 1 NumbersCollection now extends Sorter.  We no longer need an instance of Sorter nor can we instantiate it.
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log("Sorted numbers array:", numbersCollection.data);
// const sorter = new Sorter(numbersCollection) // no longer needed since refactored to abstract (see ref notes below)

// Test 2 CharactersCollection
const characterCollection = new CharactersCollection("XaZcYbdd");
characterCollection.sort();
console.log("Sorted string:", characterCollection.data);

// Test 3 LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log("Sorted linkedlist:");
linkedList.print();

/* 
  // 4 Ref only - Sorting LinkedList prior to refactoring Sorter.ts as abstract.
  // const linkedList = new LinkedList();
  // linkedList.add(500);
  // linkedList.add(-10);
  // linkedList.add(-3);
  // linkedList.add(4);

  // const sorter = new Sorter(linkedList);
  // sorter.sort();
  // linkedList.print();
*/
