//========================
//METODO findIndex
//========================

//Função: Retornar a POSIÇÃO (ÍNDICE 0, 1, 2............) DO PRIMEIRO ITEM QUE ATENDE Á CONDIÇÃO. Se não encontrar, retorna -1.

console.log("========= EXEMPLOS COM findIndex() ==== \n");



//===============
//Exemplo 1 (Básico): Posição de um valor positivo 
//==============

console.log("-----Exemplo 1: Posição do primeiro maior de idade (Básico) ----");

const idades = [12, 15, 17, 20, 25];

const indiceMaiorDeIdade = idades.findIndex((idade) => idade >= 18);

console.log("Idade:", idades);
console.log(`Primeiro maior de idade está no índice: ${indiceMaiorDeIdade} (valor: ${idades[indiceMaiorDeIdade]})`);
console.log("\n");

//============
// Exemplo 2 (intermediario): Localizar posição de usuário por ID 
//=============

console.log("-----Exemplo 2: Posição de objeto por ID (Intermediario) -------");

const usuarios = [
    {id: 10, nome: "Carla"},
    {id: 25, nome: "Diego"},
    {id:32, nome: "Fernanda"}
];

const indiceDiego = usuarios.findIndex((u) => u.id === 25);

console.log("Índice do usuário ID 25:", indiceDiego);
console.log("Elemento encontado na posição:", usuarios[indiceDiego]);
console.log("\n");


//==================
//Exemplo 3 (Back-end Rela): Exclusão em rota DELETE /produtos/ : id com splice ()
//===================

console.log("---------Exemplo 3: Remover item do bnco simulado (Back-end Real) ---");

const estoque = [
    {id: 101, nome: "Teclado", preco: 150},
    {id: 102, nome: "Mouse", preco: 80},
    {id: 103, nome: "Mouseped", preco: 40}
];

function deletarProdutoPorId(id) {
    const index = estoque.findIndex((item) => item.id === id);

    if (index === -1) {
        return {status: 404, mensagem: "Produto não localizado para exclusão."};
    }

    //Remove exatamente 1 elemento na posição encontrada
    const [removido] = estoque.splice(index, 1);

    return {
        status: 200,
        mensagem: `Produto '${removido.nome}' rtemovido com sucesso!`
    };
}

console.log(deletarProdutoPorId(102));

//Fim
