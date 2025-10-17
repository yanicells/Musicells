import { useState, useEffect} from 'react';
import { searchAlbums, searchNewAlbums } from '../utils/spotify';
import SongCard from '../components/SongCard';
import Search from '../components/Search';

function Home() {
  const [data, setData] = useState(null);

  const submitSearch = async (query) => {
    const result = await searchAlbums(query);
    setData(result.albums.items)
  }

  useEffect(() => {
    const fetchNewAlbums = async () => {
        const result = await searchNewAlbums();
        setData(result.albums.items);
    }
    fetchNewAlbums();
  }, [])

  return (
    <div className="p-8">
      <Search submitSearch={submitSearch}  />
      {data && 
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
        {data.map((album, index) => {
          return <SongCard key={index} album={album} />;
        })}
      </div>}
    </div>
  );
}

export default Home;