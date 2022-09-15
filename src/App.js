import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed, NotFound, Sidebar, Topbar, ChannelDetail, VideoDetail, SearchFeed } from './components';
import './styles/index.css';
  function App() {
    return (
    <div className="App">
      <Router>
        <Topbar />
        <Sidebar />
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Feed />} exact />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
