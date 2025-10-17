import { useFavorites } from '../contexts/FavoriteContext.jsx';
import SongCard from '../components/SongCard';

function Favorites() {
    const {favorites} = useFavorites();

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Favorites</h1>
          <p className="text-gray-600">
            {favorites.length === 0 
              ? "Start adding your favorite albums" 
              : `${favorites.length} ${favorites.length === 1 ? 'album' : 'albums'} saved`}
          </p>
        </div>

        {/* Content Section */}
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎵</div>
            <p className="text-gray-500 text-lg">Your favorite albums will appear here.</p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
            {favorites.map((album, index) => {
              return <SongCard key={index} album={album} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;