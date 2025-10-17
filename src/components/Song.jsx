import React from "react";

const Song = ({ track }) => {
  // Convert milliseconds to minutes:seconds format
  const formatDuration = (ms) => {
    if (!ms) return '0:00';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center p-4 hover:bg-gray-50 border-b border-gray-200 transition-colors">
      {/* Track Number */}
      <div className="w-8 text-gray-500 text-sm">
        {track.track_number || '-'}
      </div>

      {/* Track Info */}
      <div className="flex-1">
        <div className="font-semibold text-gray-800">
          {track.name || 'Unknown Track'}
        </div>
        <div className="text-sm text-gray-500">
          {track.artists?.[0]?.name || 'Unknown Artist'}
          {track.explicit && (
            <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded">E</span>
          )}
        </div>
      </div>

      {/* Duration */}
      <div className="text-sm text-gray-500">
        {formatDuration(track.duration_ms)}
      </div>
    </div>
  );
};

export default Song;