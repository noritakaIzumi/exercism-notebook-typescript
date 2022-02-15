type orbitalPeriods = {
    [key: string]: number,
}

const EARTH_YEAR_SECONDS = 31557600;
const ORBITAL_PERIODS: orbitalPeriods = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1.0,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
} as const;
type orbitalPeriod = typeof ORBITAL_PERIODS[keyof typeof ORBITAL_PERIODS];

export function age(planet: string, seconds: number): number {
    planet = planet.toLowerCase();
    if (Object.keys(ORBITAL_PERIODS).indexOf(planet) < 0) {
        return 0;
    }
    const period: orbitalPeriod = ORBITAL_PERIODS[planet];
    return Math.round(seconds * 100 / (EARTH_YEAR_SECONDS * period)) / 100;
}
