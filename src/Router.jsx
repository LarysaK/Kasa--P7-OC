import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import Notfound from './pages/Error/Error';
import Lodgings from "./pages/LogementPage/logementPage";

function Router() {
    return (
        // Le composant Route nous aide à établir le lien entre l'interface utilisateur du composant et l'URL
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lodgings/:id" element={<Lodgings />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Notfound />} /> 
            </Routes>
        </div>
    );
}

export default Router;