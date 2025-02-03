const a = 1;
const b = 2;
const c = 3;

function findMax(a, b, c) {
    let max;

    switch (true) {
        case (a >= b && a >= c):
            max = a;
            break;
        case (b >= a && b >= c):
            max = b;
            break;
        default:
            max = c;
    }

    return max;
}

console.log(findMax(a, b, c));
