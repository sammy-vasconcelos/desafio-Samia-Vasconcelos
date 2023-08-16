const cardapio = (item) => {
    switch(item) {
    case 'cafe': return {
        descricao: "Café",
        preco: 3.00
    }
    case 'chantily': return {
        descricao: "Chantily (extra do café)",
        preco: 1.50,
        extraCafe: true
    }
    case 'suco' : return {
        descricao: "Suco Natural",
        preco: 6.20
    }
    case 'sanduiche' : return {
        descricao: "Sanduíche",
        preco: 6.50
    }
    case 'queijo' : return {
        descricao: "Queijo (extra do sanduíche)",
        preco: 2.0,
        extraSanduiche: true
    }
    case 'salgado' : return {
        descricao: "Salgado",
        preco: 7.25
    }
    case 'comboUm' :  return{
        descricao: "1 Suco e 1 Sanduíche",
        preco: 9.50
    }
    case 'comboDois' : return {
        descricao: "1 Café e 1 Sanduíche",
        preco: 7.50
    }
}
}

export default cardapio

