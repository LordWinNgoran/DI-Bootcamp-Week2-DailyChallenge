

/****************************Exercise1***************** */


/**
 * @author: Kouadio Jean Cyrille
 * @description: Gestion des entrées et sorties d'un tableau
 * @param:fruits: Array
 * Date : 30/12/2022
 */


// Using this array 
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1 Remove Banana from the array.
let indexOfBanana = fruits.indexOf("Banana");
fruits.splice(indexOfBanana,indexOfBanana+1);
console.log(fruits);
//2 Sort the array in alphabetical order.
fruits.sort();
//3 Add “Kiwi” to the end of the array.
fruits.push("Kiwi") 
//4 Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.shift();
//5 Sort the array in reverse order. 
fruits.reverse();
console.log(fruits);








/****************************Exercise 2***************** */



//Access and then console.log “Oranges”.
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);
