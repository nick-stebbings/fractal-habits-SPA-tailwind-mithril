// Import our CSS
import './ui/assets/styles/app-base.pcss';
import './ui/assets/styles/app-components.pcss';
import './ui/assets/styles/app-utilities.pcss';
import './ui/assets/styles/vendor/flashJS/import';

import './ui/assets/scripts/flash.min.js';
import { registerEventListeners } from './ui/assets/scripts/animations.js';
import { DefaultRoute, Routes } from './ui/routes';

const $root = document.querySelector('body');
m.route($root, DefaultRoute, Routes);
