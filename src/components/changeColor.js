import dom from "../dom.js";

const changeColor = (color) => {
    dom.value.innerHTML = color;
    dom.body.style.backgroundColor = color;
}

export default changeColor;