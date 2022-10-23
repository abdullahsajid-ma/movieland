import './App.css';
const Movies = ({getmovie: {Poster,Title,Year,Type}}) => {
    return(
        <div className="cards">
            <img className="img" src={Poster !== 'N/A' ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            <h1 className="title white">{Title}</h1>
            <p className='white'>{Year} - {Type}</p>
        </div>
    )
}

export default Movies
