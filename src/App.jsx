import { useState } from 'react';
import { searchAlbums } from './utils/spotify';
import SongCard from './components/SongCard';

function App() {
  const [data, setData] = useState(null);

  const test = async () => {
    const result = await searchAlbums('Beatles');
    setData(result.albums.items);
  };

  return (
    <>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Music Cells</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={test}>Test Spotify</button>
      {data && 
      data.map((album, index) => {
        return <SongCard key={index} album={album} />;
      })
      }
    </div>
    </>    
  );
}

export default App;
