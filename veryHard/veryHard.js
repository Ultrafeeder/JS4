function changeMaker(amount) {

    const denom = [100, 50, 25, 10, 5, 1];
    var result = 0;
//tried to implement a for...of loop
    for (var _num of denom) {
       _num = Math.floor(amount / denom);
        amount = amount % denom;
        result = amount + _num;
    }
    return result;
}

console.log(changeMaker(6));


