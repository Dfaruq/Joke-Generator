import {useState, useEffect} from 'react'

function useRandomJoke() {
  const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
          const response = await fetch('https://api.chucknorris.io/jokes/random');
          const data = await response.json();
          setJoke(data.value);
        } catch (error) {
          console.error('Error fetching joke:', error);
        }
      };
    useEffect(() => {
     fetchJoke();
  }, []);

  return { joke, fetchJoke };
}

export default useRandomJoke
