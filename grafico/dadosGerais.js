const url = "https://raw.githubusercontent.com/kauanivitoria/kaka/refs/heads/main/marcas.json"

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    const roupaMaisVendido = dados.marcas[0].nome
    const numeroDePopularidade = dados.marcas[0].popularidade
    const semelhancas = dados.marcas[0].semelhanças

    console.log(roupaMaisVendido)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = `Em busca de descobrir as roupas mais vendidas em 2023, foi feita uma série de pesquisas em diferentes fontes. Com o auxílio da IA do Google, foi possível estimar que a peça mais vendida foi ${roupaMaisVendido}, com um total de aproximadamente ${numeroDePopularidade} ${semelhancas} essa coleção conquistou uma ampla audiência, refletindo a tendência atual por peças que unem praticidade e estética.`
    
 

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}

vizualizarInformacoes()