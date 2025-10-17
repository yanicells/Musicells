import React from "react";
import Song from "./Song";
import { useFavorites } from '../contexts/FavoriteContext.jsx';
import { useState, useEffect } from "react";

const Album = ({ album }) => {
    const { addLikedAlbum, removeLikedAlbum, favorites} = useFavorites();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const alreadyLiked = favorites.some(a => a.id === album.id);
        setIsLiked(alreadyLiked);
      }, [favorites, album.id]);

    const handleLike = (event) => {
        event.preventDefault();
        if (isLiked) {
            removeLikedAlbum(album);
        } else {
            addLikedAlbum(album);
        }
        setIsLiked(!isLiked);
    };

    return(
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-10">
                <img 
                    src={album.images?.[0]?.url || 'https://via.placeholder.com/300x300?text=No+Image'} 
                    alt={album.name || 'Album cover'}
                    className="w-full md:w-64 h-64 object-cover rounded-lg shadow-lg"
                />
                
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <h1 className="text-4xl font-bold mb-3">{album.name || 'Unknown Album'}</h1>
                        <p className="text-xl text-gray-600 mb-4">
                            {album.artists?.[0]?.name || 'Unknown Artist'}
                        </p>
                        <div className="space-y-1 text-gray-500">
                            <p>{album.release_date || 'Release date unknown'}</p>
                            <p>{album.total_tracks || 0} {album.total_tracks === 1 ? 'track' : 'tracks'}</p>
                            {album.label && <p>{album.label}</p>}
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleLike} 
                        className="self-start mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <img 
                            className={isLiked ? "" : "filter grayscale"} 
                            src="https://img.icons8.com/flat_round/24/000000/hearts.png" 
                            alt="like" 
                        />
                        <span className="text-sm font-medium text-gray-700">
                            {isLiked ? 'Remove from favorites' : 'Add to favorites'}
                        </span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Tracks</h2>
                {album.tracks?.items && album.tracks.items.length > 0 ? (
                    album.tracks.items.map((track) => (
                        <Song key={track.id} track={track} />
                    ))
                ) : (
                    <p className="text-gray-500">No tracks available</p>
                )}
            </div>
        </div>
    )
}

export default Album;