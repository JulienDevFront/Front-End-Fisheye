import { SingletonData } from "./services/singletonData.js";
import { homePage } from "./pages/homePage.js";
import { photographerPage } from "./pages/photographerPage.js";

/** JS.DOC =>
 * - - -
 * @function App() @type {Arrow function}
 * - - -
 * @description load datas and pages of app
 */
const App = async () => {
    try {
        await SingletonData.loadData("./../../api/photographers.json");
        homePage();
        photographerPage();
    } catch (e) {
        console.error(e);
    }
};
// ↧ ↧ ↧ App render
App();
