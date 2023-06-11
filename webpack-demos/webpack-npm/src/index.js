import _ from 'lodash';
import './style.css';
import Icon from './icon.webp';
import print from './print';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack from HMR'], ' ');
    element.classList.add('hello');

    let image = new Image();
    image.src = Icon;

    element.appendChild(image);

    print();

    return element;
}

document.body.appendChild(component());