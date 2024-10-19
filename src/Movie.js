
const Movie = (props) => {
  return (
    <div className="movie">
      <div className="hover">
       <img className="img" src={props.Img} alt="hii"/>
      <p>
        Movie : {props.Movie}
      </p>
       <p>year : {props.Year}</p>
       <p>Released date : {props.RD}</p>
       <p>IMDB rating : {props.IMDb}</p>
       </div>                 
    </div>
  )
}



export default Movie