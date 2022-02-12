type bandColors = {
    [key: string]: number,
};

export function decodedValue(colors: string[]): number {
    if (colors.length < 2) {
        return 0;
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
    for (let i = 0; i < 2; ++i) {
        if (Object.keys(bandColors).indexOf(colors[i]) < 0) {
            break;
        }
        const color: keyof bandColors = colors[i] as keyof bandColors;
        number += Math.pow(10, 1 - i) * bandColors[color];
    }
    return number;
}
