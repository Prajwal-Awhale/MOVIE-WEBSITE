import './App.css';
import Header from './Header';
import Movie from './Movie';
import Movies from './movie.json'
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className='Main'>
      {
        Movies.map((ele,index)=>{
          return(
          <Movie
          key={index}
          Img = {ele.Poster}
          Tittle={ele.Title}
          Year={ele.Year}
RD={ele.Released}
IMDB = {ele.imdbRating}

          />
          )
        })
      }
    
     </div>
     <Footer/>
    </div>
 
  );
}

export default App;
