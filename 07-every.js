//=====================
// MÉTODO: every
// Função: Verificar se TODOS os elementos sumprem rigorosamente a condição.
// Retorna true apenas se 100% dos iens satisfazem a regra
//=====================

console.log('=========== EXEMPLOS COM every() =====\n')

//-------------------------------------------------
// Exemplo 1 (Básico): Confirmar se todos os números são positivos
//------------------------------------------------

console.log("--- Exemplo 1: Todos os números são positivos? (Básicos) ------");

const notas = [7.5, 8.0, 9.5, 6.0];

const todasPositivas = notas.every((nota) => nota >= 0);

console.log("Notas:", notas);
console.log("Todas as notas são válidas (>= 0), todasPositivas");
console.log("\n");

//==================================
// Exemplo 2 (intermediário): Validação de clientes ativos 
//==================
console.log("--- Exemplo 2: Toda a turma de clientes está ativa? (intermediário) -------");

const clientes = [
    {id: 1, nome: "Felipe", ativo: true},
    {id:2, nome: "Camila", ativo: true},
    {id:3, nome: "Camila", ativo: true}
];

const todosAtivos = clientes.every((cliente) => cliente.ativo);

console.log("Clientes", clientes.map(c => `${c.nome}: ${c.ativo ? 'Ativo' : 'inativo'}`));
console.log("Todos estão ativados?", todosAtivos);
console.log("\n")

//=============================
// Exemplo 3 (back-end Real): Validação de Checkout no E-commerce 
//=============================

console.log("------- Exemplo 3: Validação de estoque antes de fechar pedido (Back-end Real)---------------");

const itensDoPedido = [
    {produto: "Notebook Gamer", qtdComprada: 1, estoqueDisponível: 4},
    {produto: "Mouseped Gamer", qtdComprada: 2, estoqueDisponível: 1}
];

function validarDisponibilidadeCheckout(itens) {
    //Regra: cada item precisa ter quantidade comprada <= estoque disponível
    const peidioValido = itens.every((item) => {
        return item.qtdComprada <= item.estoqueDisponível;
    });

    if (peidioValido) {
        return {
            status: 200,
            autorizado: true,
            mensagem: "Pedido autorizado com sucesso"
        };
    }

    return {
        status: 400,
        autorizado: false,
        mensagem: "Falha no checkout: Um ou mais itens não possuem estoqeu suficiente."
    };
}

console.log(validarDisponibilidadeCheckout(itensDoPedido));
