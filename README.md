# Validando cartão de crédito usando o Algoritmo de Luhn 

## Projeto em funcionamento
https://juhreisf.github.io/SAP008-card-validation/src/index.html

## Índice

* [1. Introdução](#1-Introdução)
* [2. Descrição](#2-Descrição)
* [3. Protótipo](#3-Protótipo)
* [4. Layout](#4-Layout)
* [5. Tecnologias utilizadas](#5-Tecnologias-utilizadas)
* [6. Autora](#6-Autora)


## 1. Introdução

Com base no ANSI X4.13, a fórmula LUHN (também conhecida como módulo 10, ou mod 10, algoritmo) é usada para gerar e / ou validar e verificar a precisão dos números de cartão de crédito.

* Dígito de verificação do cartão de crédito

A maioria dos cartões de crédito contém um dígito de verificação, que é o dígito no final do número do cartão de crédito. A primeira parte do número do cartão de crédito identifica o tipo de cartão de crédito (Visa, MasterCard, American Express, etc.) e os dígitos do meio identificam o banco e o cliente.

Para gerar o dígito de verificação, a fórmula LUHN é aplicada ao número. Para validar o número do cartão de crédito, o dígito de verificação é incluído na fórmula.

Veja como funciona o algoritmo para verificar cartões de crédito; a matemática é bastante simples:

1) Começando com o penúltimo dígito e movendo para a esquerda, dobre o valor de todos os dígitos alternados.

2) Começando da esquerda, pegue todos os dígitos não afetados e adicione-os aos resultados de todos os dígitos individuais da etapa 1. Se os resultados de qualquer um dos números da etapa 1 forem dois dígitos, certifique-se de adicionar os dois números primeiro (ou seja 18 resultaria em 1 + 8). Basicamente, sua equação parecerá um problema de adição normal que adiciona cada dígito.

3) O total da etapa 2 deve terminar em zero para que o número do cartão de crédito seja válido.

A fórmula LUHN foi criada no final dos anos 1960 por um grupo de matemáticos. Pouco depois, as empresas de cartão de crédito o adotaram. Como o algoritmo é de domínio público, ele pode ser usado por qualquer pessoa.


## 2. Descrição

Fiz a criação de uma tela de pagamento com o cartão de crédito, simulando uma página de salão afro, onde o usário ira incluir os seus dados para o pagamento do sinal e efetuar a sua reserva de atendimento. 
A página contém um campo onde o usuário ira digitar o seu nome e o número do cartão, caso o usuário não digite nada no campo do cartão receberá a mesnagem: "Digite o número do cartão", se o mesmo digitar o número correto ele vai receber na tela uma mensagem dizendo: "Parabéns, pagamento efetuado com sucesso", caso o número seja digitado incorretamente o mesmo recebera a mensagem: " digite novamente, cartão inválido".
Além da validação ou não do cartão, em ambas as mensagens irá aparecer o número do cartão do usuário mascarado com "#" nos primeiros 12 digitos, deixando vísivel somente os 4 útimos digitos. 

## 3. Protótipo 

![Protótipo](https://github.com/Juhreisf/SAP008-card-validation/blob/main/src/prototipo.png?raw=true)

## 4. Layout

![Layout](https://github.com/Juhreisf/SAP008-card-validation/blob/main/src/layout.png?raw=true)

## 5. Tecnologias utilizadas

* HTML5
* CSS3
* JavaScrip
* Node.js
* Git e GitHub
* Canva


## 6. Autora

Juliana dos Reis Fernandes
