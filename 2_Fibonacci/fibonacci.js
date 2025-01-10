function isFibonacci(n) {
    let a = 0, b = 1;
    while (b <= n) {
        if (b === n) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

const num = parseInt(process.argv[2]) || 0; // Número passado como argumento
console.log(
    `${num} ${isFibonacci(num) ? "pertence" : "não pertence"} à sequência de Fibonacci.`
);

// Exemplo de execução: node fibonacci.js 4