(() => {

let container = document.querySelector("#container");

function fetch(id) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => { console.log("all done"); });
}

fetch(8);

})();