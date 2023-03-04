import type { StatName, PokemonStat } from "../types";

export function extractStatsValue(
	stats: PokemonStat[],
	statName: StatName
): number | undefined {
	const selectedStat = stats.find(
		({ stat_name }) => stat_name.toLowerCase() === statName.toLowerCase()
	);

	if (selectedStat) {
		return selectedStat.base_stat;
	}
}
