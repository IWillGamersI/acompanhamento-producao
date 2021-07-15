
//Carregar os selects com dados fixos
//pegado o selec de cliente ID => "nome-cliente"
selectCliente = document.getElementById('nome-cliente')

//criando a lista de cliente
const listaCliente = [
    {id:1,name:'Cliente 01'},
    {id:2,name:'Cliente 02'},
    {id:3,name:'Cliente 03'}
]

//criando option e adicionando o cliente no option
const addOptionCliente = () => {
    var optionCliente = document.createElement('option')
    optionCliente.textContent = cadaCliente.name
    selectCliente.append(optionCliente)
}

//percorrendo a lista para carregar o select
for(let i = 0; i < listaCliente.length; i++){
    var cadaCliente = listaCliente[i]
    addOptionCliente()
}

//fim

//pegando a data nome do cliente e o numero do pedido
//form
const formCliente = document.getElementById('form-cliente')
//ul => ID "ul-cliente"
const ulCliente = document.getElementById('ul-cliente')
//data
const inputDataPedido = document.getElementById('data')
//numero pedido
const inputNumeroPedido = document.getElementById('numero-pedido')
//botão do cliente
const btnCliente = document.getElementById('btn-cliente')
//btnCliente.addEventListener('click',addCliente)

//criando uma li para os dados do cliente do pedido

formCliente.addEventListener('submit', event => {
    event.preventDefault()

    let dataPedido = inputDataPedido.value.trim()
    let clientePedido = selectCliente.value.trim()
    let numeroPedido = inputNumeroPedido.value.trim()


    if(dataPedido === '' || clientePedido === '' || numeroPedido === ''){
        alert('Preencha todos os campos do cliente')
        return
    }


    const liCliente = document.createElement('li')
    liCliente.innerHTML = `Data: <span>${dataPedido}</span> 
        Cliente: <span>${clientePedido}</span>
        Nº Pedido: <span>${numeroPedido}</span> 
        <button id="btn-remove-cliente" class="btn-padrao">X</button>`

    btnCliente.disabled = true
    inputDataPedido.value = ''
    selectCliente.value = ''
    inputNumeroPedido.value = ''

    ulCliente.append(liCliente)
})
//fim primeiro bloco

//Carregar os selects com dados fixos
//pegado o selec de Produtos ID => "nome-cliente"
selectProduto = document.getElementById('nome-produto')

//criando lista de produto
const listaProduto = [
    {id:1,name:'Produto 01'},
    {id:2,name:'Produto 02'},
    {id:3,name:'Produto 03'},
    {id:4,name:'Produto 04'},
    {id:5,name:'Produto 05'},
    
]

//criando option e adicionando o produto no option
const addOptionProduto = () => {
    var optionProduto = document.createElement('option')
    optionProduto.textContent = cadaProduto.name
    selectProduto.append(optionProduto)
}

//percorrendo a lista para carregar o select
for(let i = 0; i < listaProduto.length; i++){
    var cadaProduto = listaProduto[i]
    addOptionProduto()
}

//FIM

//pegando os dados do PRODUTO
//quantidade
const inputQuantidadePedido = document.getElementById('quantidade')
//form do Produto
const formProduto = document.getElementById('form-produto')
//ul do produto
const ulProduto = document.getElementById('ul-produto')





const localStorageLista = JSON.parse(localStorage
    .getItem('pedido'))
let pedido = localStorage
    .getItem('pedido') !== null ? localStorageLista:[]


//fazendo a remoção de item
const remove = ID =>{
    pedido = pedido
        .filter(produto => produto.id !== ID )
    salvandoLocalStore()
    init()
}





//criando a Lista de produto
const addProdutoLista = produtoLista => {
    
    const liProduto = document.createElement('li')

    liProduto.innerHTML =` 
                <span><p id="li-produto" class="ul-li-produto">${produtoLista.name}</p></span>
                <p id="li-quantidade" class="ul-li-quantidade">${produtoLista.qtd}</p>
                
                <button id="remove-produto" class="btn-produto" onClick="remove(${produtoLista.id})">
                X 
                </button>
                                
            `
            
    ulProduto.append(liProduto)
      
  
}





//somando a lista de pedido
const totalPedido = document.querySelector('#tp')
const concluidoPedido = document.querySelector('#tc')
const saldoPedido = document.querySelector('#s')
const peso = document.querySelector('#p')
const somandoListaPedido = () =>{
    
    const somaQuantidade = pedido
        .map(produtoLista => produtoLista.qtd)
    
    const soma = somaQuantidade
        .filter(value => value > 0)
        .reduce((acumulado,value) => acumulado + value,0)

    
    const concluido = somaQuantidade 
        .filter(value => value < 0)
        .reduce((acumulado,value) => acumulado + value,0)
    
       
    const saldo = soma - concluido

    totalPedido.textContent = soma
    concluidoPedido.textContent = concluido
    saldoPedido.textContent = saldo
    peso.textContent = 0
    

}

const init =()=>{
    ulProduto.innerHTML = ''
    pedido.forEach(addProdutoLista)
    somandoListaPedido()
   
}

init()

//adiconando o dados na local storage
const salvandoLocalStore = () => {
    localStorage.setItem('pedido',  JSON.stringify(pedido))
}



const generateID = () => Math.round(Math.random() * 1000)

//carreando a lista do pedido com os produtos
formProduto.addEventListener('submit', event =>{
    event.preventDefault()

    inputProduto = selectProduto.value.trim()
    inputQuantidade = inputQuantidadePedido.value.trim()

    if(inputProduto === '' || inputQuantidade === ''){
        alert('Preechas o Campos de Produto Corretamente')
        return
    }
    
    const cadaProduto = { 
        id:generateID(),
        name:inputProduto,
        qtd:Number(inputQuantidade)
    }

    pedido.push(cadaProduto)
    init()

    salvandoLocalStore()

    selectProduto.value = ''
    inputQuantidadePedido.value = ''
    
})












