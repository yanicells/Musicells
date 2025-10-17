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
                        <a 
                            href={album.external_urls?.spotify} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl font-bold mb-3 hover:text-green-600 transition-colors flex items-center gap-2 group"
                        >
                            {album.name || 'Unknown Album'}
                            <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                        </a>
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
    className={`self-start mt-6 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
        isLiked 
            ? 'bg-red-50 hover:bg-red-100 border border-red-200' 
            : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
    }`}
>
    <img 
        className={`transition-all duration-300 ${isLiked ? "animate-pulse" : "filter grayscale"}`}
        src="https://img.icons8.com/flat_round/24/000000/hearts.png" 
        alt="like" 
    />
    <span className={`text-sm font-medium transition-colors ${isLiked ? 'text-red-600' : 'text-gray-700'}`}>
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