import '../styles/main.scss';

import pageLayout from './components/pageLayout';
import domEvents from './helpers/DOMEvents';

const init = () => {
  pageLayout();
  domEvents();
};

init();
