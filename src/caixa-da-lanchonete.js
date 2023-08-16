import cardapio from "./cardapio.js";
import pagamento from "./pagamento.js";

class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        if(itens == undefined || itens == null || itens == '' ){ return "Não há itens no carrinho de compra!"} 
        else if(itens.length == 0 ){ return "Quantidade inválida!"} 
        else if(metodoDePagamento == undefined || metodoDePagamento == null || metodoDePagamento == ''){return "Não há itens no carrinho de compra!"}
        else if(metodoDePagamento !== "dinheiro" && metodoDePagamento !== "debito" && metodoDePagamento !== "credito"){ return "Forma de pagamento inválida!"} 
        else {
            var precoTotal = 0
            var response = ''
            itens.forEach(item => {
                const itemQuantidade = parseInt(item.toString().replace(/\D/g,'')) 
                const itemCardapio = cardapio(item.toString().replace(/[^a-zA-Z]/g, ''))
                console.log(itemCardapio)
                if(itemCardapio == undefined ){
                    return response = "Item inválido!"
                }
                else if(itemQuantidade == 0){
                    return response = 'Quantidade inválida!'
                } else {
                    return (
                        precoTotal += itemCardapio.preco * itemQuantidade,
                        response = response
                    );
                }
            })

            const pedido =  itens.map(item => {
                const itemQuantidade = parseInt(item.toString().replace(/\D/g,''))
                const itemNome = item.toString().replace(/[^a-z]/g, '')
                return { itemNome,itemQuantidade}
            })

            const mapPedido = pedido.map(item => ({
                [item.itemNome]: item.itemQuantidade
                })
            )
            const obj = Object.assign({}, ...mapPedido)
            
            const checkExist = (objName, keyName) => {
                let exist = Object.keys(objName).some(key => key === keyName);
                return exist;
            };

            if(checkExist(obj, 'chantily') && !checkExist(obj, 'cafe') || 
               checkExist(obj, 'queijo') && !checkExist(obj,'sanduiche')){
               return 'Item extra não pode ser pedido sem o principal'
            } 

            if( response !== ''){
                return response;
            }
            else {
                const valorTotal = pagamento(metodoDePagamento, precoTotal).toFixed(2)
                return `R$ ${valorTotal.replace('.', ',')}`;
            } 
        }
    }
    
}

const caixa = new CaixaDaLanchonete
const pedido = caixa.calcularValorDaCompra('debito', ['cafe,1', 'chantily, 0'])


export { CaixaDaLanchonete };
