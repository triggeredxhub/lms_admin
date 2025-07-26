import { useEffect, useState } from 'react';
import api from '../../src/api/http'; // adjust path based on your structure

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/api/hello')
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error('API Error:', err);
      });
  }, []);

  return <h1 className="text-3xl font-bold underline text-red-500">{message}</h1>;
}

export default Home;
