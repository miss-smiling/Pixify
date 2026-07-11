/**
 * ==========================================
 * Pixify
 * Application Entry Point
 * Version: 1.0
 * ==========================================
 */

import { Home } from "./pages/home.js";

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");

    app.innerHTML = Home();

});
