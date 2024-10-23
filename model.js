const WEIRD_NOUNS =
    "Epiphany Limerence Petrichor Serendipity Cynosure Quixotry Susurrus Raconteur Agog Reverie Zephyr Euphoria Soliloquy Seraphine Luminary Vesper Mirage Panacea Zenith Nebula";
const WEIRD_ADJECTIVES =
    "Ephemeral Luminous Serene Mellifluous Effervescent Verdant Ethereal Ineffable Winsome Radiant Nostalgic Vivid Sublime Feral Buoyant Lucid Placid Jovial Pristine Vibrant";

const DATA = {
    nouns: WEIRD_NOUNS.split(" "),
    adjectives: WEIRD_ADJECTIVES.split(" ")
};

export function getData() {
    return DATA;
}
