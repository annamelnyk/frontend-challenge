type Mods = Record<string, string | boolean>;

export function classNames(
	cls: string,
	modificatots: Mods = {},
	additional: string[] = []
): string {
	
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(modificatots)
			.filter(([key, value]) => Boolean(value))
			.map(([key, value]) => key),
	].join(" ");
}
