import { PokemonTypeName } from "../../types";
import { classNames } from "../../utils/classNames";
import css from "./PokemonType.module.css";

type NodeType = "span" | "button";

interface PokemonTypeProps {
	className?: string;
	nodeType?: NodeType;
	pokemonType: PokemonTypeName;
	isSelected: boolean;
	selectPokemonTypeHandler?: any;
}

export const PokemonType = (props: PokemonTypeProps) => {
	const {
		selectPokemonTypeHandler,
		nodeType = "span",
		pokemonType = "bug",
		isSelected = false,
	} = props;

	const color = `var(--color-type-${pokemonType}`;
	const pokemonTypeStyle = {
		border: `2px solid ${color}`,
		color: isSelected ? "white" : color,
		backgroundColor: isSelected ? color : "",
	};

	const selectPokemonType = (
		e: React.MouseEvent<HTMLButtonElement>,
		pokemonType: PokemonTypeName
	) => selectPokemonTypeHandler(pokemonType);

	if (nodeType === "span") {
		return (
			<span
				className={classNames(css.PokemonType, {}, [pokemonType])}
				style={pokemonTypeStyle}
			>
				{pokemonType}
			</span>
		);
	}

	return (
		<button
			className={classNames(css.PokemonType, {}, [pokemonType, css.button])}
			style={pokemonTypeStyle}
			onClick={(e) => selectPokemonType(e, pokemonType)}
		>
			{pokemonType}
		</button>
	);
};
