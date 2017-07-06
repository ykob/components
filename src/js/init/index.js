import Hover from 'js-util/Hover.js';

export default function() {
  const elmHover = document.getElementsByClassName('js-hover');
  for (var i = 0; i < elmHover.length; i++) {
    new Hover(elmHover[i]);
  }
};
