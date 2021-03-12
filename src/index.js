// Import our CSS
import "./ui/assets/css/app-base.pcss";
import "./ui/assets/css/app-components.pcss";
import "./ui/assets/css/app-utilities.pcss";

import animate from "./ui/assets/scripts/animations.js";
import { DefaultRoute, Routes } from "./ui/routes";

const $root = document.querySelector("body");
m.route($root, DefaultRoute, Routes);
