import { Route, Routes } from 'react-router-dom';
import StartPage from './startpage';
import MixBook from './mixbook';
import GoogleTest from './googleTest';

function App() {
    return (
        <>
            <Routes className="App">
                <Route path="/" element={<StartPage />} />
                <Route path="/mixbook" element={<MixBook />} />
                <Route path="/googletest" element={<GoogleTest />} />
            </Routes>
        </>
    );
}

export default App;
