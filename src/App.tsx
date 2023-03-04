import { useState, createContext, type Dispatch } from "react";
import "css-wipe";

import jsonData from "./data/pokemon-gen1.json";
import type { Pokemon, PokemonTypeName } from "./types";
import pokemonLogo from "./img/pokemon-logo.png";
import { extractPokemonTypes } from "./utils/utils";
import { PokemonTypeFilter } from "./components/PokemonTypeFilter/PokemonTypeFilter";
import { PokemonList } from "./components/PokemonList/PokemonList";

const data = jsonData as Pokemon[];

export const SelectedPokemonsContext = createContext({
	selectedTypes: [] as Array<PokemonTypeName>,
	setSelectedTypes: (() => {}) as Dispatch<any>,
});

function App() {
	const [selectedTypes, setSelectedTypes] = useState<any>([]);

	const selectPokemonType = (type: PokemonTypeName | null): void => {
		if (!type) {
			setSelectedTypes([]);
			return;
		}
		setSelectedTypes([...selectedTypes, type]);
	};

	return (
		<div className="container">
			<nav className="nav">
				<img alt="Pokémon Logo" className="logo" src={pokemonLogo} />
			</nav>
			<main className="content">
				<h1 className="title">Find Pokémon to build your team!</h1>
				<SelectedPokemonsContext.Provider
					value={{ selectedTypes, setSelectedTypes: selectPokemonType }}
				>
					<PokemonTypeFilter types={extractPokemonTypes(data)} />
					<PokemonList pokemons={data}></PokemonList>
				</SelectedPokemonsContext.Provider>
			</main>
		</div>
	);
}

export default App;
