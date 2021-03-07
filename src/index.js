// Import our CSS
import "./ui/assets/css/app-base.pcss";
import "./ui/assets/css/app-components.pcss";
import "./ui/assets/css/app-utilities.pcss";

import animate from "./ui/assets/scripts/animations.js";

import Layout from "./ui/view/Layout.jsx";

m.mount(document.querySelector("body"), Layout);
