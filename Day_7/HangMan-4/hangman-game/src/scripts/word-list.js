const wordList = {
    Technology: [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js"
    ],
    Nature: [
        "Mountain",
        "River",
        "Forest",
        "Ocean",
        "Desert"
    ],
    Miscellaneous: [
        "Piano",
        "Guitar",
        "Painting",
        "Photography",
        "Cooking"
    ],
    History: [
        "Civilization",
        "Empire",
        "Revolution",
        "Dynasty",
        "Invention"
    ],
    Sports: [
        "Soccer",
        "Basketball",
        "Tennis",
        "Baseball",
        "Cricket"
    ]
};

export function getRandomWord(category) {
    const words = wordList[category];
    if (!words) return null;
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

export default wordList;