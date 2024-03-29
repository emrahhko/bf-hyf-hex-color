
import data from '../data.js'


const getRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * data.characters.length);
    return data.characters[randomIndex];
}

export default getRandomCharacter;