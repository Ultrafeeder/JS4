function changeMaker(denom, amount) {
    // takes the array, denom, and sorts in descending order
    denom.sort(function (a, b) {
        return b - a;
    });
    // variable that will mutate with later for loop
    let result = 0;
    // iterates through values in our array which represent our bills. Whatever value i has coresponds with an index in our array.
    for (let i = 0; i < denom.length; i++) {
            // if the amount divided by the current denomination = 0 then only one type of bill is needed, so we mutate the result variable to show how many bills we need, and terminate the loop to then execute our return function in the scope above this statement.
            if (amount % denom[i] === 0) {
                result += amount / denom[i];
                break;
            }
        // This statement exists to move past bills that we can't use. When using modulo, and we try to divide a smaller number by a larger number, we get a remainder equal to the smaller number, so there's no need to consider that bill in our calculations.
            else if (amount % denom[i] === amount && denom[i] > amount) {
                i = i;
            }
                // This statement subtracts the current denomination, denom[i], from our amount but also recurs itself by subtracting 1 from i so that when the funtion repeats, it will continue to use the same index to do this calculation until one of the former conditions are met.
            else if (amount % denom[i] !== 0) {
               if (i === denom.length - 1){
                    return -1;
                } else {
                    amount -= denom[i];
                    i -= 1
                    result += 1;
                } 
            }
    }
    return result;
}


console.log(changeMaker([100, 50, 25, 10, 5, 1], 201));
console.log(changeMaker([6, 3, 4, 2, 1, 9], 53));
console.log(changeMaker([2, 4], 3))

