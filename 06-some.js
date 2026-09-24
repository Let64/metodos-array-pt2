// MÉTODO: some()

//==============
// Função: Verificar se PELO MENOS UM elemento atende á condição restada
// Retorna true ou false
//=========

console.log("========= EXEMPLOS COM some() ======\n");

//--------------------------
// Exemplo 1 (Básico): Verificar existência de número negativo
//----------------------------------

console.log("--- Exemplo 1: Há número negativo? (Básico)-----------");

const temperaturas = [23, 19, 28, -2, 31];

const temCongelamento = temperaturas.some((temp) => temp < 0);

console.log("Temperaturas:", temperaturas);
console.log("Houve temperatura abaixo de zero?", temCongelamento);
console.log("\n");

//===================
// Exemplo 2 (intermediário): Checar pendência cadastral de ususários
//======================

console.log("-------- Exemplo 2: Há usuários inativos? (intermediário)---------");

const usuarios = [
    {id: 1, nome: "Lucas", ativos: true},
    {id: 2, nome: "Mariana", ativo: false},
    {id: 3, nome: "Carlos", ativo: true}
];

const haInativos = usuarios.some((u) => !u.ativo);

console.log("Existe algum usuario inativo?", haInativos);
console.log("\n");

//====================
// Exemplo 3 (Back-end Real): Alerta de reposição de estoque 
//====================
console.log("---------- Exemplo 3: Alerta de estoque esgotado (Back-end Real)-----------" );

const inventario = [
    {id:101, nome: "Monitor 24pol", estoque: 6},
    {id:102, nome:"Cabo HDMI 2.0", estoque: 0},
    {id:103, nome: "Webcam HD", estoque: 15}
];

function checarNecessidadeDeReposicao(produtos) {
    const temEsgotado = produtos.some((p) => p.estoque === 0);

    if (temEsgotado) {
        return "ALERTA: Há poucos esgotados no armazém. Acionar compras!";
    }

    return "OK: Todos os produtos possuem estoque"
}

console.log(checarNecessidadeDeReposicao(inventario));
//FIM