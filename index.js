function buscarPokemon() {
    const pokemonInput = document.getElementById("pokemonInput");
    const resultado = document.getElementById("resultado");
    const pokemonNombre = pokemonInput.value.toLowerCase();

    if (pokemonNombre === "") {
        resultado.innerHTML = "Por favor, ingresa un nombre o número de Pokémon.";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se encontró el Pokémon.");
            }
            return response.json();
        })
        .then(data => {
            const nombre = data.name;
            const id = data.id;
            const height = data.height;
            const weight = data.weight;
            const type = data.type;
            const imagen = data.sprites.front_default;
            resultado.innerHTML = `
            <div id="div">
            <div id="pokeInfo">
                
                <img src="${imagen}" alt="${nombre}">
                <p id="color">${id}</p>
                <h2 id="color">${nombre}</h2>
                <p id="color">Peso: ${height} kg</p>
                <p id="color">Tipo: ${type}</p>
                <p id="color">Altura: ${weight} m</p>
                </div>
            </div>
                
            `;
        })
        .catch(error => {
            resultado.innerHTML = error.message;
        });
}
