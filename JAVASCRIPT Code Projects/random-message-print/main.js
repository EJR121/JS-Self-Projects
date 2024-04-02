// Define your Data
const dndData = {
    race: ["Human", "Elf", "Half-Elf", "Halfling", "Gnome", "Dragonborn", "Half-Orc"],
    class: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
    background: ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"],
    quirks: ["Always hums or sings to self", "Collects Strange items", "Has a fear of small animals", "Laughs at inappropriate times", "Talks to inanimated objects"],
    choice: ['Nice so you choose this for your character, very good choice indeed!']
};

// Arrow function to generate random message
const generateRandomCharacter = () => {
    const randomRace = dndData.race[Math.floor(Math.random() * dndData.race.length)];
    const randomClass = dndData.class[Math.floor(Math.random() * dndData.class.length)];
    const randomBackground = dndData.background[Math.floor(Math.random() * dndData.background.length)];
    const randomQuirk = dndData.quirks[Math.floor(Math.random() * dndData.quirks.length)];
    const randomChoice = dndData.choice[0]; // Since choice is an array, access the first element

    const message = `Race: ${randomRace}\nClass: ${randomClass}\nBackground: ${randomBackground}\nQuirk: ${randomQuirk}`;
    
    console.log(message); // Print the character attributes
    console.log(randomChoice); // Print the choice message
};

// Generate and display the random character
generateRandomCharacter();
