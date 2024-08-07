let valorTotal;
limpar();

function adicionar() {
    
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade < 1 || isNaN(quantidade)) {
      alert('Escolha uma quantidade válida do produto desejado!');
      return;
  }

    let carrinho = document.getElementById('lista-produtos');
    let preco = quantidade * valorUnitario;

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco},00</span>
        </section>
      </section>`;

    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal},00`;
    
    document.getElementById('quantidade').value = '';
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0,00';
}