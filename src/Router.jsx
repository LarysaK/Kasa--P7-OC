import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Lodging from './components/Lodging/Lodging';
import About from './pages/About/About';
import Notfound from './pages/Error/Error';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lodging/:id" element={<Lodging />} />
                <Route path="/about" element={<About />} />
                { <Route path="/lodging/*" element={<Notfound />} /> } 
                { <Route path="/*" element={<Notfound />} /> }
            </Routes>
        </div>
    );
}

export default Router;