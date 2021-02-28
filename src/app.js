// Import our CSS
import "./css/app-base.pcss";
import "./css/app-components.pcss";
import "./css/app-utilities.pcss";

import animate from "./animations.js";

import Layout from "./view/Layout.jsx";

m.mount(document.querySelector("body"), Layout);
