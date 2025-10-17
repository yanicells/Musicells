import { useState } from 'react';
import { searchAlbums } from './utils/spotify';
import SongCard from './components/SongCard';
import Search from './components/Search';

function App() {
  const [data, setData] = useState(null);

  const submitSearch = async (query) => {
    const result = await searchAlbums(query);
    setData(result.albums.items)
  }

  return (
    <>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Music Cells</h1>
      <Search submitSearch={submitSearch}  />
      {data && 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.map((album, index) => {
          return <SongCard key={index} album={album}/>;
        })}
      </div>}
    </div>
    </>    
  );
}

export default App;
