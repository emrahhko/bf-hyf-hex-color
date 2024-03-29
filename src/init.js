

import getRandomCharacter from "./utils/getRandomCharacter.js";
import changeColor from "./components/changeColor.js";
import dom from "./dom.js";





const changeColorHandler = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += getRandomCharacter();
    }

    changeColor(color);
};



dom.btn.addEventListener('click', changeColorHandler);