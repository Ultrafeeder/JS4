let range = [1, 2, 3, 4, 5, 7, 8]

function findIndex(arr) {
    let target = 7;
    if (arr.indexOf(target) === -1) {
        return `not present`;
    }
    for (let i = 0; i < range.length; i++){
        let index = arr.indexOf(target);
        return index;
    } 
    
}

console.log(findIndex(range));