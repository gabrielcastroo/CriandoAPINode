const sequence = {
    id: 1,
    get id(){ return this.id++ }
}

const produtos = {}

function saveProduct(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = { saveProduct, getProduto, getProdutos }

