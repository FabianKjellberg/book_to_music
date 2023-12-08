import { Route, Routes } from 'react-router-dom';
import StartPage from './startpage';
import MixBook from './mixbook';
import bannerImage from './img/banner.png'
import './index.css'

function App() {
    return (
        <>
        <img className="banner" src={bannerImage} alt="Banner" />
            <Routes className="App">
                <Route path="/" element={<StartPage />} />
                <Route path="mixbook" element={<MixBook />} />
            </Routes>
        </>
    );
}

export default App;
