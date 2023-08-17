import { createRouter } from "../core/Router.js"

import MainPage from "./MainPage.js";
import CreatePage from "./CreatePage.js";

export default createRouter([
  { path: '#/', component: MainPage},
  { path: '#/create', component: CreatePage},
])