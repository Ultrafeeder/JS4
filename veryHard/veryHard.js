function makeChange(amount) {
    let numOfMon = 0;
    let fund = [25, 10, 5, 1];
    if (amount % fund[0] === 0) {
        numOfMon = numOfMon + Math.floor(amount / fund[0]);
    } else if ((amount % fund[0]) % fund[1] === 0) {
        numOfMon = numOfMon + Math.floor(amount / fund[0]) + Math.floor((amount / fund[0]) / fund[1]);
    }
    return numOfMon
}

console.log(makeChange(110));