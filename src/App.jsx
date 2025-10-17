import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import { FavoriteProvider } from './contexts/FavoriteContext.jsx';
import Navbar from './components/Navbar.jsx';
import AlbumView from './pages/AlbumView.jsx';

function App() {
  return (
    <main>
      <FavoriteProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/album/:id" element={<AlbumView />} />
      </Routes>
      </FavoriteProvider>
    </main>
  );  
}

export default App;