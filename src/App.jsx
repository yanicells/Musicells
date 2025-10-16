import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { searchAlbums } from './utils/spotify';

function App() {
  const [data, setData] = useState(null);

  const test = async () => {
    const result = await searchAlbums('Beatles');
    setData(result);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Music Cells</h1>
      <Button onClick={test}>Test Spotify</Button>
      {data && <pre className="mt-4 text-xs">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
