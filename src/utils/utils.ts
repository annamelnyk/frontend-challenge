import { PokemonTypeName, Pokemon } from "../types";

export function extractPokemonTypes(
	data: Pokemon[] = []
): Array<PokemonTypeName> {
	const uniqueTypes: Array<PokemonTypeName> = [];

	data.forEach(({ types }) =>
		types.forEach(({ type_name }) => {
			if (!uniqueTypes.includes(type_name)) {
				uniqueTypes.push(type_name);
			}
		})
	);

	return uniqueTypes;
}
