import _ from 'lodash'
import * as utilities from './utilities'
import './style.css'
import './style.scss'
import logo from './morning.jpg'

function component() {
    const element = document.createElement('div');
    const array = ["Hello", "webpack", "welcome!!", utilities.NAME];
    element.innerHTML = _.join(array, ', ');
    return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = logo;
document.body.appendChild(image);