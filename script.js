

a = [5, 6, 7];
b = [3, 6, 10];

function compareTriplets(a, b) {
    let bob = 0;
    let alice = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            bob++;
        } else if (a[i] < b[i]) {
            alice++;
        }
    }
    
  return [bob, alice];
}

console.log(compareTriplets(a, b)); // expected output: 1, 1

