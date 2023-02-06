function contar(){
    let inicio = window.document.querySelector('input#ini')
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.querySelector('input#passo')
    let res = window.document.querySelector('div#res')
   
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Não foi possível contar!'
    }else{
        res.innerHTML = 'contando:<br>'
        var ini = Number(inicio.value)
        var nfim = Number(fim.value)
        var npasso = Number(passo.value)
        if(npasso == 0){
            window.alert('Passo inválido, considerando PASSO 1!')
            npasso = 1
            }
        if(ini < nfim){
            //CONTAGEM CRESCENTE
        for(let c = ini; c <= nfim; c += npasso){
            res.innerHTML += ` ${c}, `
            }
        }else{
            //CONTAGEM DECRESCENTE
        for(let c = ini; c >= nfim; c -= npasso){
            res.innerHTML += ` ${c}, `
            }
        }
    }   res.innerHTML += 'FIM'
}
