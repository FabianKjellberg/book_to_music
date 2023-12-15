import { Route, Routes } from 'react-router-dom';
import StartPage from './startpage';
import MixBook from './mixbook';
import GoogleTest from './googleTest';
import SpotifyAuthorization from "./SpotifyAuthorization";
import SpotifyPlaylists from "./SpotifyPlaylists";

function App() {
    return (
        <>
            <Routes className="App">
                <Route path="/" element={<StartPage />} />
                <Route path="/mixbook" element={<MixBook />} />
                <Route path="/googletest" element={<GoogleTest />} />
                <Route path="/spotify-auth" element={<SpotifyAuthorization />} />
                <Route path="/spotify-playlists" element={<SpotifyPlaylists />} />
            </Routes>
        </>
    );
}

export default App;
