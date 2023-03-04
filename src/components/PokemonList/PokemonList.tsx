import type { Pokemon } from "../../types";
import { PokemonItem } from "../PokemonItem/PokemonItem";
import { classNames } from "../../utils/classNames";
import css from "./PokemonList.module.css";
import "../../index.css";

interface PokemonListProps {
	className?: string;
	pokemons: Pokemon[];
}

export const PokemonList = (props: PokemonListProps) => {
	return (
		<table className={classNames(css.PokemonList)}>
			<thead className={css.PockemonListHead}>
				<tr>
					<th>Pokemon</th>
					<th>Type(s)</th>
					<th>Attack</th>
					<th>Sp.Attack</th>
					<th>Defence</th>
					<th>Sp. Defence</th>
					<th>Speed</th>
					<th>Hit Points</th>
				</tr>
			</thead>
			<tbody className="list-container">
				{props.pokemons.map((pokemon) => (
					<PokemonItem pokemon={pokemon} key={pokemon.id} />
				))}
			</tbody>
		</table>
	);
};
