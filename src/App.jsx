import { Route, Routes } from "react-router-dom";
import StartPage from "./startpage";
import MixBook from "./mixbook";
import bannerImage from "./img/banner.png";

function App() {
  return (
    <>
      <img className="banner" src={bannerImage} alt="Banner" />
      <Routes className="App">
        <Route path="/" element={<StartPage />} />
        <Route path="/mixbook" element={<MixBook />} />
      </Routes>
      <div class="footer">
        <p>★ BookMixtape</p>
      </div>
    </>
  );
}

export default App;
