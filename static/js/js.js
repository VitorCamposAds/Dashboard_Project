function gera_cor(qtd=1){
    var bg_color = []
    var border_color = []
    for(let i = 0; i < qtd; i++){
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        bg_color.push(`rgba(${r}, ${g}, ${b}, ${0.2})`)
        border_color.push(`rgba(${r}, ${g}, ${b}, ${1})`)
    }

    return [bg_color, border_color];

}

function renderiza_total_vendido(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        document.getElementById('faturamento_total').innerHTML = data.total
    })

}

function renderiza_despesas_mensal(url) {
    fetch(url, {
        method: 'get',
    }).then(function (result) {
        return result.json();
    }).then(function (data) {
        const ctx = document.getElementById('despesas_mensal').getContext('2d');
        const cores_despesas_mensal = gera_cor_fortissima(data.labels.length); // Gere cores fortíssimas aleatórias
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Despesas',
                    data: data.data,
                    backgroundColor: cores_despesas_mensal,
                    borderWidth: 1
                }]
            },
        });
    });
}

// Função para gerar cores fortíssimas aleatórias
function gera_cor_fortissima(qtd) {
    const cores_fortissimas = [];
    for (let i = 0; i < qtd; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cores_fortissimas.push(`rgba(${r}, ${g}, ${b}, 1)`);
    }
    return cores_fortissimas;
}


function renderiza_faturamento_mensal(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        const ctx = document.getElementById('faturamento_mensal').getContext('2d');
        var cores_faturamento_mensal = gera_cor(qtd=12);
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Faturamento',
                    data: data.data,
                    backgroundColor: cores_faturamento_mensal[0],
                    borderColor: cores_faturamento_mensal[1],
                    borderWidth: 1
                }]
            },
        });
    }); // Faltava fechamento de colchete e parêntese aqui
}

function renderiza_produtos_mais_vendidos(url) {
    fetch(url)
        .then(function(result) {
            return result.json();
        })
        .then(function(data) {
            const ctx = document.getElementById('produtos_mais_vendidos').getContext('2d');
            var cores_produtos_mais_vendidos = gera_cor(qtd = 4);
            const myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Despesas',
                        data: data.data,
                        backgroundColor: cores_produtos_mais_vendidos[0],
                        borderColor: cores_produtos_mais_vendidos[1],
                        borderWidth: 1
                    }]
                },
            });
        });
}

function renderiza_funcionario_mes(url) {
    fetch(url)
        .then(function(result) {
            return result.json();
        })
        .then(function(data) {
            const ctx = document.getElementById('funcionarios_do_mes').getContext('2d');
            var cores_funcionarios_do_mes = gera_cor(qtd = 4);
            const myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: data.labels,
                    datasets: [{
                        data: data.data,
                        backgroundColor: cores_funcionarios_do_mes[0],
                        borderColor: cores_funcionarios_do_mes[1],
                        borderWidth: 1
                    }]
                },
            });
        });
}
