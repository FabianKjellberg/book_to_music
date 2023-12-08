import { Route, Routes } from 'react-router-dom';
import StartPage from './startpage';
import MixBook from './mixbook';

function App() {
    return (
        <>
            <Routes className="App">
                <Route path="/" element={<StartPage />} />
                <Route path="mixbook" element={<MixBook />} />
            </Routes>
        </>
    );
}

export default App;
