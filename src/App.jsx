import  StartPage from './startpage'
import  MixBook from './mixbook'

import './index.css'
import bannerImage from './img/banner.png'

function App() {
  return (
    <>
      <img className="banner" src={bannerImage} alt="Banner" />
      <StartPage></StartPage>
      {/*<MixBook></MixBook> */}
      <div class="footer">
          <p>★ BookMixtape</p>
      </div>
    </>
  )
}

export default App
