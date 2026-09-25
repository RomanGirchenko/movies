import React from "react";
import MovieLists from "../components/MovieLists";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import './Main.css';


class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
        count: 0
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=e33ac59f&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false, count: data.totalResults }))
    }

    searchMovie = (str, type="all", page) => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=e33ac59f&s=${str}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false, count: data.totalResults }))
    }

    render() {
        const { movies, loading, count } = this.state;

        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie} totalCount={count}/>
                    {
                        loading ? <Preloader /> : <MovieLists movies={movies}/> 
                    }
                </div>
            </div>
        )
    }
}

export default Main;