export type StatName =
	| "hp"
	| "attack"
	| "defense"
	| "speed"
	| "special-attack"
	| "special-defense";

export type PokemonTypeName =
	| "bug"
	| "dark"
	| "dragon"
	| "electric"
	| "fairy"
	| "fighting"
	| "fire"
	| "flying"
	| "ghost"
	| "grass"
	| "ground"
	| "ice"
	| "normal"
	| "poison"
	| "psychic"
	| "rock"
	| "steel"
	| "water";

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat_name: StatName;
}

export interface IPokemonType {
	slot: number;
	type_name: PokemonTypeName;
}

export interface PokemonSprite {
	artwork_url: string;
	front_url: string;
	back_url: string;
}

export interface Pokemon {
	id: number;
	order: number;
	name: string;
	height: number;
	genus: string;
	habitat: string;
	color: string;
	flavor_text: string;
	stats: PokemonStat[];
	sprite: PokemonSprite;
	types: IPokemonType[];
}
