import _ from 'lodash'
import * as utilities from './utilities'

console.log(utilities.Nizyou(10))
console.log(utilities.Nizyou(5))

function component() {
    const element = document.createElement('div');
    const array = ["Hello", "webpack", "welcome!!", utilities.NAME];
    element.innerHTML = _.join(array, ', ');
    return element;
}

document.body.appendChild(component());