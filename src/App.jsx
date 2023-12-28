import { Route, Routes } from 'react-router-dom';
import StartPage from './startpage';
import MixBook from './mixbook';
import SpotifyAuthorization from "./SpotifyAuthorization";
import SpotifyPlaylists from "./SpotifyPlaylists";
import SpotifyAddPlaylist from "./SpotifyAddPlaylist";
import bannerImage from './img/banner.png'



function App() {
    return (
        <>
        <img className="banner" src={bannerImage} alt="Banner" />
            <Routes className="App">
                <Route path="/" element={<StartPage />} />
                <Route path="/mixbook" element={<MixBook />} />
                <Route path="/spotify-auth" element={<SpotifyAuthorization />} />
                <Route path="/spotify-playlists" element={<SpotifyPlaylists />} />
                <Route path="/add-playlist" element={<SpotifyAddPlaylist />} />
            </Routes>
        </>
    );
}

export default App;
