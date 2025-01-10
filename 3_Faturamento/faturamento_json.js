const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./dados.json', 'utf8'));
const valores = data.map(d => d.valor).filter(valor => valor > 0);

const menor = Math.min(...valores);
const maior = Math.max(...valores);
const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
const diasAcimaMedia = valores.filter(valor => valor > media).length;

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);