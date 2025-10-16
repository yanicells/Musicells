import React from "react";

const SongCard = ({ album }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <img
          src={album.images[0].url}
          alt={album.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
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
    </div>
  );
};

export default SongCard;