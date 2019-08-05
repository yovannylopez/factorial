/*
// Solución 1

function factorial(n) {
	let total = 1;

	for (let index = 1; index <= n; index++) {
		total = total * index;
	}

	return total;
}

alert(factorial(6));

*/

/*// Solución 2

let fac = [];

function factorial(n) {
	if (n == 0 || n == 1) {
		return 1;
	}
	if (fac[n] > 0) {
		return fac[n];
	}

	return (fac[n] = factorial(n - 1) * n);
}

alert(factorial(90));

*/

/*
// Solución 3
// No funciona

let fac = [];

let i = 1;

function factorial(n) {
	if (typeof fac[n] != 'undefined') {
		return fac[n];
	}

	let result = fac[i - 1];

	for (let index = 1; index < n; index++) {
		fac[i] = multiply(i.toString());
	}

	return result;
}

alert(factorial(90));
*/

// Solución 4

function factorial(n){

    let i;
    let nextNumber;
    let calcular;

    result = n.toString().split('').map(Number);

    while(--n){
        i = calcular = 0;

        while((nextNumber = result[i++]) !== undefined || calcular){
            calcular = (nextNumber || 0) * n + calcular;
            result[i-1] = calcular % 10;
            calcular = parseInt(calcular / 10);
        }
    }

    return result.reverse().join('');
}

document.write(factorial(50));
