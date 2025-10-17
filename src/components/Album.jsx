import React from "react";
import Song from "./Song";

const Album = ({ album }) => {

    return(
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img 
                    src={album.images?.[0]?.url || 'https://via.placeholder.com/300x300?text=No+Image'} 
                    alt={album.name || 'Album cover'}
                    className="w-full md:w-64 h-64 object-cover rounded-lg shadow-lg"
                />
                
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-2">{album.name || 'Unknown Album'}</h1>
                    <p className="text-xl text-gray-600 mb-2">
                        {album.artists?.[0]?.name || 'Unknown Artist'}
                    </p>
                    <p className="text-gray-500 mb-1">
                        {album.release_date || 'Release date unknown'}
                    </p>
                    <p className="text-gray-500 mb-1">
                        {album.total_tracks || 0} {album.total_tracks === 1 ? 'track' : 'tracks'}
                    </p>
                    {album.label && (
                        <p className="text-gray-500">{album.label}</p>
                    )}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
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