import { Component } from "react";
import {movies} from "../movieData"

class Banner extends Component {
    render() {
        let movie = movies.results[Math.floor(Math.random()*10)]
        let backdropPath = movie.backdrop_path
        return (
            <div className="card banner-card" >
                <img className="card-img-top banner-img" src={`https://image.tmdb.org/t/p/original${backdropPath}`} alt="Card image cap"/>
                <div className="bannerTextDiv">
                    <h5 className="card-title banner-title">{movie.title}</h5>
                    <p className="card-text banner-text">{movie.overview}</p>
                </div>
            </div>
        )

    }
}

export default Banner