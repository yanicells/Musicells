import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getAlbumDetails } from '../utils/spotify';
import Album from '../components/Album';

function AlbumView() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});

  useEffect(() => {
    const fetchAlbum = async () => {
      const details = await getAlbumDetails(id);
      console.log('Album Details:', details);
      setAlbum(details);
    };
    
    fetchAlbum(); 
  }, [id]);

  if (!album) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <Album album={album} />    
    </div>
  );
}

export default AlbumView;