import initIndex from './init/index.js'

import ScrollManager from './modules/ScrollManager.js';

const pageId = document.getElementsByClassName('l-page')[0].getAttribute('data-page-id');

const init = () => {
  const scrollManager = new ScrollManager();
  switch (pageId) {
    case 'index':
      initIndex();
      break;
    default:
  }
  scrollManager.scroll();
}
init();
