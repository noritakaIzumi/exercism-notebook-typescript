type bandColors = {
    [key: string]: number,
};

export function decodedResistorValue(colors: string[]): string {
    if (colors.length < 3) {
        return '';
    }
    const bandColors: bandColors = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9,
    };
    let number = 0;
    for (let i = 0; i < 3; ++i) {
        if (Object.keys(bandColors).indexOf(colors[i]) < 0) {
            return '';
        }
        const color: keyof bandColors = colors[i] as keyof bandColors;
        if (i < 2) {
            number += Math.pow(10, 1 - i) * bandColors[color];
        } else {
            number *= Math.pow(10, bandColors[color]);
        }
    }
    const displayKilo = number >= 1000 ? 'kilo' : '';
    if (displayKilo) {
        number /= 1000;
    }
    return `${number} ${displayKilo}ohms`;
}
