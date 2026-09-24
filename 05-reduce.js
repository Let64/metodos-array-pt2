//===========
// MÉTODO: reduce()
//===========

//Função: Processa todos os elementos do array e ACUMULA tudo em um ÚNICO VALOR FINAL(número, string, objeto agrupado, etc).
//================

console.log("==== EXEMPLOS COM reduce() =====\n");

//============
//Exemplo 1 (Básico): Somatória de valores numéricos
//==========

console.log("-----Exemplo1: Soma de números (Báisco) ---");

const valores = [10, 25, 30, 45];

const somaTotal = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0); //0 é o valor inicial do acumulador

console.log("Valores:", valores);
console.log("Soma toatl:", somaTotal);
console.log("\n");

//================
// Exemplo 2 (intermediário): Somatória de preços em carrinho simples
//===========

console.log("---- Exemplo 2: Subtotal de carrinhos de compras (intermediário) ---------");

const carrinho = [
    {item: "Camiseta Dev", preco: 49.90},
    {item: "Canecaa JS", preco:29.90},
    {item: "Adesivo Node", preco: 10.00}

];

const subtotal = carrinho.reduce((acc, produto) => {
    return acc + produto.preco;
}, 0);

console.log(`Subtotal do Carrinho: R$ ${subtotal.toFixed(2)}`);
console.log("\n");

//=======================
// Exemplo 3 (Back-end Real): Fechamento de pedido com quantiade e cálculo de frete
//==================

console.log("----- Exemplo 3: Fechamento de Pedido e Relatorio (Bac-end Real) ---");

const pedido = [
    {id:1, nome: "Hambúrguer Artesanal", preco:32.0, qtd: 2},
    {id:2, nome: "Batata Frita Rústica", preco: 16.0, qtd: 1},
    {id:3, nome: "Refrigerante Lata", preco: 7.0, qtd: 3}
];

const taxaEntrega = 8.50;

//Calcula o valor dos itens multiplicando o preco unitário pela quantidade
const totalItens = pedido.reduce((acumulador, item) => {
    return acumulador + (item.preco * item.qtd);
}, 0);

const totalFinal = totalItens + taxaEntrega;

console.log("Itens do Pedidido", pedido);
console.log(`Subtotal dos itens : R$ ${totalItens.toFixed(2)}`);
console.log(`Taxa de Entrega : R$ ${taxaEntrega.toFixed(2)}`);
console.log(`Total a pagar : R$ ${totalFinal.toFixed(2)}`);

//fim

    