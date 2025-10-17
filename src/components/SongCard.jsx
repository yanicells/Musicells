import React from "react";
import { useState, useEffect } from "react";
import { useFavorites } from '../contexts/FavoriteContext.jsx';
import { Link } from "react-router-dom";

const SongCard = ({ album }) => {
  const { addLikedAlbum, removeLikedAlbum, favorites} = useFavorites();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (event) => {
    event.preventDefault();
    if (isLiked) {
      removeLikedAlbum(album);
    } else {
      addLikedAlbum(album);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const alreadyLiked = favorites.some(a => a.id === album.id);
    setIsLiked(alreadyLiked);
  }, [favorites, album.id]);

  return (
    <Link 
      to={`/album/${album.id}`} 
      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105"
    >
      <img
        src={album.images?.[0]?.url || 'https://via.placeholder.com/300x300?text=No+Image'}
        alt={album.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {album.name}
        </h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gray-800 font-semibold">{album.artists?.[0]?.name || 'Unknown Artist'}</span>
          </div>
          <span className="text-gray-600">{album.release_date}</span>
          <button 
            onClick={handleLike} 
            className="float-right mr-3 hover:scale-110 active:scale-95 transition-all duration-200 z-10"
          >
            <img 
              className={`transition-all duration-300 ${isLiked ? "animate-pulse" : "filter grayscale hover:scale-105"}`} 
              src="https://img.icons8.com/flat_round/24/000000/hearts.png" 
              alt="like" 
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;