const pagamento = (forma, totalDinheiro) => {
        switch(forma){
            case 'dinheiro': return totalDinheiro - (totalDinheiro * 0.05)
            case 'debito': return totalDinheiro
            case 'credito': return totalDinheiro + (totalDinheiro * 0.03)
        }    
}

export default pagamento;