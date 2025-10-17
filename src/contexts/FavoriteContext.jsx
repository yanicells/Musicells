/* eslint-disable react-refresh/only-export-components */
import {createContext, useState, useContext, useEffect} from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({children}) => {
    const [likedAlbums, setLikedAlbums] = useState(() => {
        const saved = localStorage.getItem('likedAlbums');
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
      console.log('Liked albums updated:', likedAlbums);
    }, [likedAlbums]);
  
    const addLikedAlbum = (album) => {
      if (!likedAlbums.find(a => a.id === album.id)) {
          setLikedAlbums([...likedAlbums, album]);
      }
    }

    useEffect(() => {
      localStorage.setItem('likedAlbums', JSON.stringify(likedAlbums));
    }, [likedAlbums]);
  
    const removeLikedAlbum = (album) => {
      setLikedAlbums(likedAlbums.filter(a => a.id !== album.id));
    }
  
  return (
    <FavoriteContext.Provider value={{favorites: likedAlbums, addLikedAlbum, removeLikedAlbum}}>
        {children}
    </FavoriteContext.Provider>
    )
}