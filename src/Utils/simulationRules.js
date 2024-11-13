// Example rules and constants for simulation
export const speciesTypes = {
    SEA_STAR: "seaStar",
    SEA_URCHIN: "seaUrchin",
    HERMIT_CRAB: "hermitCrab",
    MUSSEL: "mussel",
    SEA_ANEMONE: "seaAnemone",
    ALGAE: "algae",
};

export const rules = {
    predatorPrey: {
        [speciesTypes.SEA_STAR]: [speciesTypes.SEA_URCHIN, speciesTypes.HERMIT_CRAB],
        [speciesTypes.SEA_ANEMONE]: [speciesTypes.MUSSEL],
    },
    growthRates: {
        [speciesTypes.ALGAE]: 0.1,
    },
    environmentalStressors: ["hurricane", "pollution", "tidalChange"],
};

export function handleInteraction(predator, prey) {
    // Define what happens when predator encounters prey
    if (rules.predatorPrey[predator]?.includes(prey)) {
        return "eat"; // Predator eats prey
    }
    return null;
}
