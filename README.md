# Prova Técnica - Desenvolvedor Back-End

Este repositório contém as soluções para a prova técnica solicitada. As questões foram resolvidas utilizando Node.js. Para cada questão, foi criada uma pasta contendo o código fonte correspondente.

## Estrutura do Repositório

/
|-- 1_Soma/
|   |-- soma.js
|
|-- 2_Fibonacci/
|   |-- fibonacci.js
|
|-- 3_Faturamento/
|   |-- faturamento.js
|
|-- 4_Distribuidora/
|   |-- distribuidora.js
|
|-- 5_Caracteres_Invertidos/
|   |-- caracteres.js
|
|-- .gitignore
|-- dados.json
|-- dados.xml
|-- package-lock.json
|-- package.json
|-- LICENSE
|-- README.md

## Questões

### 1. Soma de Números

Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

### 2. Sequência de Fibonacci

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

### 3. Faturamento Diário

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

### 4. Faturamento Mensal por Estado

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

### 5. Inversão de Caracteres

Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse
