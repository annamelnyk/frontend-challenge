import { useContext } from "react";

import { SelectedPokemonsContext } from "../../App";
import { PokemonTypeName } from "../../types";
import { classNames } from "../../utils/classNames";
import { PokemonType } from "../PokemonType/PokemonType";
import styles from "./PokemonTypeFilter.module.css";

interface PokemonTypeFilterProps {
	className?: string;
	types: Array<PokemonTypeName>;
}

export const PokemonTypeFilter = (props: PokemonTypeFilterProps) => {
	const { types } = props;
	const { selectedTypes, setSelectedTypes } = useContext(
		SelectedPokemonsContext
	);

	const isSelected = (type: PokemonTypeName): boolean =>
		selectedTypes.includes(type);

	const clearSelections = () => setSelectedTypes(null);

	return (
		<div className={classNames(styles.PokemonTypeFilter)}>
			{types.map((type) => (
				<PokemonType
					nodeType="button"
					pokemonType={type}
					key={type}
					isSelected={isSelected(type)}
					selectPokemonTypeHandler={(type: PokemonTypeName) =>
						setSelectedTypes(type)
					}
				/>
			))}
			<button onClick={clearSelections}>Clear all</button>
		</div>
	);
};
