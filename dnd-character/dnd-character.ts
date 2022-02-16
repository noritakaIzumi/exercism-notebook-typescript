const getRandomDiceSum = (): number => {
    const probability: { [key: number]: number } = {
        3: 100.0,
        4: 99.9228395062,
        5: 99.6141975309,
        6: 98.8425925926,
        7: 97.2222222222,
        8: 94.2901234568,
        9: 89.5061728395,
        10: 82.4845679012,
        11: 73.0709876543,
        12: 61.6512345679,
        13: 48.7654320988,
        14: 35.4938271605,
        15: 23.1481481481,
        16: 13.0401234568,
        17: 5.78703703704,
        18: 1.62037037037,
    };
    const randomFloat = 100 * Math.random();
    for (let i = 18; i >= 3; i--) {
        if (probability[i] >= randomFloat) {
            return i;
        }
    }
    return 3;
};

const DEFAULT_HITPOINT = 10;

export class DnDCharacter {
    public readonly strength: number;
    public readonly dexterity: number;
    public readonly constitution: number;
    public readonly intelligence: number;
    public readonly wisdom: number;
    public readonly charisma: number;
    public readonly hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = DEFAULT_HITPOINT + DnDCharacter.getModifierFor(this.constitution);
    }

    public static generateAbilityScore(): number {
        return getRandomDiceSum();
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2);
    }
}
