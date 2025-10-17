import { useFavorites } from '../contexts/FavoriteContext.jsx';
import SongCard from '../components/SongCard';

function Favorites() {
    const {favorites} = useFavorites();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>Your favorite albums will appear here.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {favorites.map((album, index) => {
            return <SongCard key={index} album={album} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Favorites;