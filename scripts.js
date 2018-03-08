let div = document.querySelector('div');
let input = document.querySelector('input');

function buscar(){
    let url = 'https://swapi.co/api/people?search=' + input.value;
    
    axios.get(url).then(function(resposta){
        console.log(resposta);

        if(resposta.data.results.length > 0){
            div.innerHTML = `<p>${resposta.data.results[0].name}</p>`;
            div.innerHTML += `<p>${resposta.data.results[0].height} cm</p>`;
            div.innerHTML += `<p>${resposta.data.results[0].mass} kg</p>`;
        }
    });
}

