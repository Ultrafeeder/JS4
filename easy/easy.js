let arr1 = [1, 2, 3, 4];
let arr2 = [5, 16, 3];
let arr3 = [2.5, 3.5, 4.5];

function average(range) {
    let sum = 0
    for (let i = 0; i < range.length; i++) {
        sum = sum + range[i];
        avr = sum / range.length;
    }
    return avr
}

console.log(average(arr3))