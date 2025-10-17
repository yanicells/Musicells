import { useState, useEffect} from 'react';
import { searchAlbums, searchNewAlbums } from '../utils/spotify';
import SongCard from '../components/SongCard';
import Search from '../components/Search';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const submitSearch = async (query) => {
    setLoading(true);
    const result = await searchAlbums(query);
    setData(result.albums.items);
    setLoading(false);
  }

  useEffect(() => {
    const fetchNewAlbums = async () => {
      setLoading(true);
      const result = await searchNewAlbums();
      setData(result.albums.items);
      setLoading(false);
    }
    fetchNewAlbums();
  }, [])

  return (
    <div className="p-8">
      <Search submitSearch={submitSearch} />
      {loading ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-pulse">
              <div className="w-full h-64 bg-gray-300"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : data && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
          {data.map((album, index) => {
            return <SongCard key={index} album={album} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;