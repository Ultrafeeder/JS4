

function findIndex(target) {
let range = [1, 2, 3, 4, 5, 6, 7, 8]
    for (let i = 0; i < range.length; i++){
        let index = range.indexOf(target);
        return index;
    }
    
}

console.log(findIndex(7))