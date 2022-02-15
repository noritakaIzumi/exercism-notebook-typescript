type toRnaMap = {
    [key: string]: string,
}

export function toRna(strands: string): string {
    const toRnaMap: toRnaMap = {
        'A': 'U',
        'T': 'A',
        'G': 'C',
        'C': 'G',
    };
    let rnaStr = '';
    for (let i = 0; i < strands.length; i++) {
        if (Object.keys(toRnaMap).indexOf(strands[i]) >= 0) {
            rnaStr += toRnaMap[strands[i]];
        } else {
            throw 'Invalid input DNA.';
        }
    }
    return rnaStr;
}
