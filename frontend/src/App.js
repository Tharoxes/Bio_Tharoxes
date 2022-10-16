import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SocialMedia from './pages/SocialMedia';
import Twitch from './pages/Twitch';
import Youtube from './pages/Youtube';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/twitch' element={<Twitch />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/socialmedia' element={<SocialMedia />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
