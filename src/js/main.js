import initIndex from './init/index.js'

const pageId = document.getElementsByClassName('l-page')[0].getAttribute('data-page-id');

const init = () => {
  switch (pageId) {
    case 'index':
      initIndex();
      break;
    default:
  }
}
init();
