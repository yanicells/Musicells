import React from "react";
import { useState, useEffect } from "react";
import { useFavorites } from '../contexts/FavoriteContext.jsx';

const SongCard = ({ album, liked }) => {
  const { addLikedAlbum, removeLikedAlbum, favorites} = useFavorites();
  const [isLiked, setIsLiked] = useState(liked);

  const handleLike = (event) => {
    if (isLiked) {
      removeLikedAlbum(album);
    } else {
      addLikedAlbum(album);
    }
    setIsLiked(!isLiked);
    event.preventDefault();
  };

  useEffect(() => {
    if(favorites.find(a => a.id === album.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [favorites, album.id]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <img
        src={album.images[0].url}
        alt={album.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {album.name}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gray-800 font-semibold">{album.artists[0].name}</span>
          </div>
          <span className="text-gray-600">{album.release_date}</span>
          <a href="#" className="float-right mr-3" onClick={handleLike}>
            <img className={isLiked ? "" : "filter grayscale"} src="https://img.icons8.com/flat_round/24/000000/hearts.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SongCard;