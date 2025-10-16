import React from "react";

const SongCard = ({ album }) => {
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
        </div>
      </div>
    </div>
  );
};

export default SongCard;