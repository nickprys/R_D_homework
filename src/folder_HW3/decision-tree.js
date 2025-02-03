const a = 1;
const b = 2;
const c = 3;

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}


console.log(findMax(a, b, c));


