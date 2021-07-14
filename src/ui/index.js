// Import our CSS
import './assets/styles/app-base.pcss';
import './assets/styles/app-components.pcss';
import './assets/styles/app-utilities.pcss';
import './assets/styles/vendor/flashJS/import';

// Vendor JS
import './assets/scripts/vendor/flash.min.js';

import { DefaultRoute, Routes } from './routes';

const $root = document.body;

m.route.setOrig = m.route.set;
m.route.set = function (path, data, options) {
  m.route.setOrig(path, data, options);
  window.scrollTo(0, 0);
};

m.route.linkOrig = m.route.link;
m.route.link = function (vnode) {
  m.route.linkOrig(vnode);
  window.scrollTo(0, 0);
};

m.route($root, DefaultRoute, Routes);
