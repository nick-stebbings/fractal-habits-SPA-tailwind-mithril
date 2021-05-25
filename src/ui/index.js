// Import our CSS
import "./assets/styles/app-base.pcss";
import "./assets/styles/app-components.pcss";
import "./assets/styles/app-utilities.pcss";
import "./assets/styles/vendor/flashJS/import";

// Vendor JS
import "./assets/scripts/vendor/flash.min.js";

import { DefaultRoute, Routes } from "./routes";
const $root = document.body;
m.route($root, DefaultRoute, Routes);
