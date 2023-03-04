import { useContext } from "react";

import type {
	Pokemon,
	StatName,
	IPokemonType,
	PokemonTypeName,
} from "../../types";
import { SelectedPokemonsContext } from "../../App";
import { classNames } from "../../utils/classNames";
import { extractStatsValue } from "../../utils/extractStatsValue";
import { PokemonType } from "../PokemonType/PokemonType";
import css from "./PokemonItem.module.css";

const TABLE_STAT_NAMES: StatName[] = [
	"attack",
	"special-attack",
	"defense",
	"special-defense",
	"speed",
	"hp",
];

interface PokemonItemProps {
	className?: string;
	pokemon: Pokemon;
}

export const PokemonItem = ({ pokemon }: PokemonItemProps) => {
	const { name, sprite, stats } = pokemon;
	const isRed = (value: number): boolean => value > 90;
	const { selectedTypes, setSelectedTypes } = useContext(
		SelectedPokemonsContext
	);

	const showType = () => {
		const isSelected = (type: PokemonTypeName): boolean =>
			selectedTypes.includes(type);

		return pokemon.types.map((pokemonType: IPokemonType) => (
			<PokemonType
				key={pokemonType.slot}
				pokemonType={pokemonType.type_name}
				isSelected={isSelected(pokemonType.type_name)}
			/>
		));
	};

	const renderStats = () => {
		return TABLE_STAT_NAMES.map((statName: StatName) => {
			const statNameValue = extractStatsValue(stats, statName);

			return (
				<td
					key={statName}
					className={classNames("", { red: isRed(statNameValue!) })}
				>
					{statNameValue}
				</td>
			);
		});
	};

	return (
		<tr className={classNames(css.PokemonItem)}>
			<td>
				<div className={classNames(css.PokemonContainer)}>
					<div className={css.PokemonImageContainer}>
						<img src={sprite.front_url} alt={name} />
					</div>
					<h3 className={css.PokemonName}>{name}</h3>
				</div>
			</td>
			<td>{showType()}</td>
			{renderStats()}
		</tr>
	);
};
