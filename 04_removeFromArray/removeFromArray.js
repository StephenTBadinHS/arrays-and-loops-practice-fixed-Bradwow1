const removeFromArray = function(array, itemsToRemove) {
    return array.filter(element => !itemsToRemove.includes(element));
}
let array = [1,2,3,4,5,6];
let itemsToRemove = [2,4,6];

// Do not edit below this line
console.log(removeFromArray(array, itemsToRemove))