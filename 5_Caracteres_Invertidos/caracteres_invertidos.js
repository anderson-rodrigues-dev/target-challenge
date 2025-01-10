function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const input = process.argv[2] || "Exemplo";
console.log(`String invertida: ${inverterString(input)}`);
