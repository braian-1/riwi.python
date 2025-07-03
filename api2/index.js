function buscarPokemon(){
    const nombre = document.getElementById("nombrePokemon").value.toLowerCase().trim();
    const resultado = document.getElementById("resultado");

    if(!nombre){
        resultado.innerHTML = "<p>Por favor escribe el nombre de un pokemon.</p>";
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    fetch(url)
        .then(response => {
            if(!resultado.ok){
                throw new Error("Pokemon no encontrado");
            }
            return response.json();
         })
        .then(pokemon => {
            resultado.innerHTML=`
        <div class="pokemon">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p><strong>tipo:</strong>${pokemon.types.map(t => t.type.name).join(",")}</p>
        <p><strong>Altura:</strong>${pokemon.height}</p>
        <p><strong>Peso:</strong>${pokemon.weight}</p>
        </div>`;
    })
    .catch(error =>{
        resultado.innerHTML=`<p style="color:red;"> Pokemon no encontrado. Intenta con otro nombre.</p>`;
    });
}