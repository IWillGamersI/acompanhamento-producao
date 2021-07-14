//Carregar os selects com dados fixos
//pegado o selec de cliente ID => "nome-cliente"
selectCliente = document.getElementById('nome-cliente')

//criando a lista de cliente
const listaCliente = [
    {id:1,name:'Ventura Pet'},
    {id:2,name:'Atacapet Pet'},
    {id:3,name:'Agrodog Pet'}
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

//Carregar os selects com dados fixos
//pegado o selec de Produtos ID => "nome-cliente"
selectProduto = document.getElementById('nome-produto')

//criando lista de produto
const listaProduto = [
    {id:1,name:'Quadrada PQ',peso:0.400},
    {id:2,name:'Sextavada PQ',peso:0.400},
    {id:3,name:'Pentagono PQ',peso:0.400}
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

//pegando a data nome do cliente e o numero do pedido
//form
const form = document.getElementById('form-cliente')
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

form.addEventListener('submit', event => {
    event.preventDefault()

    let dataPedido = inputDataPedido.value.trim()
    let clientePedido = selectCliente.value.trim()
    let numeroPedido = inputNumeroPedido.value.trim()


    if(dataPedido === '' || clientePedido === '' || numeroPedido === ''){
        alert('Preencha todos os campos do cliente')
        return
    }


    var liCliente = document.createElement('li')
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



