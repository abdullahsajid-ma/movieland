import { useEffect, useState } from 'react';
import './App.css';
import Movies from './Movies'


function App() {

  const [movie, setMovie] = useState('')
  const [content, setContent] = useState([])

  const API_KEY = "https://www.omdbapi.com/?apikey=e6226e6d"

  const searchMovie = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`)
    const data = await response.json()
    setContent(data.Search)
  }
  useEffect(() => {
    searchMovie("the matrix")
  }, [movie])

  return (
    <div className="App">
      <div>
        <h1 className='white'>Movie Land</h1>
      </div>
      <div className='searchArea'>

        <input type="text" placeholder='search Movie' className='inputArea'
          value={movie} onChange={(e) => setMovie(e.target.value)} />

        <img className='searchIcon' src='https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg'
          alt="" onClick={() => searchMovie(movie)} />
      </div>

      {content.length > 0
        ? (
          <div className='container'>
            {content.map((getmovie) =>
            (
              <Movies getmovie={getmovie} />
            ))}
          </div>
        ) : (
          <div className='no-moive'>
            <h2 className='white'>no movie found</h2>
          </div>
        )}
    </div>
  );
}

export default App;
// e6226e6d
