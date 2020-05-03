import React from 'react';
// import moviesData from '../moviesData.js';
import MoviesList from '../components/MoviesList/MoviesList.jsx';
import MovieListWillWatch from '../components/MovieListWillWatch/MovieListWillWatch';
import MovieTabs from './MovieTabs'
import { API_KEY, API_URL } from '../api'
import Preloader from './Preloader/Preloader.jsx';

class App extends React.Component {
  constructor(props) {
    console.log('Constructor App')
    super(props);

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'popularity.desc',
      current_page: 1
    }
  }

  componentDidMount() {
    console.log('App is mounted and data started fetching')
    this.getMovies()
  }


  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, '\n', this.props, this.state);
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  getMovies = () => {
    const {sort_by, current_page: page} = this.state;
    setTimeout(() => fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sort_by}&page=${page}`)
    .then(resp => resp.json())
    .then(data => {
      console.log('data is fetched');
      this.setState({ movies: data.results });
    }), 2000)
  }

  handleWillWatch = (data) => {
    if (data.watchLater) {
      this.setState({ moviesWillWatch: this.state.moviesWillWatch.filter(item => item.id !== data.id) })
    } else {
      this.setState({ moviesWillWatch: [...this.state.moviesWillWatch, data] })
    }
  }

  handleDeleteMovie = (id) => {
    this.setState({
      movies: this.state.movies.filter(item => item.id !== id),
      moviesWillWatch: this.state.moviesWillWatch.filter(item => item.id !== id)
    });
  }

  updateSortBy = (value) => {
    this.setState({sort_by: value, current_page: 1, movies: []});
  }

  changePage = (e) => {
    if (this.state.current_page === 1 && e.currentTarget.value === 'prev') {
      return
    } else if (e.currentTarget.value === 'prev') {
      this.setState({current_page: --this.state.current_page, movies: []})
      console.log('started fetching new page')
      this.getMovies()
    } else if (e.currentTarget.value === 'next') {
      this.setState({current_page: ++this.state.current_page, movies: []})
      console.log('started fetching new page')
      this.getMovies()
    }
  }


  render() {
    console.log('render', this.constructor.name);
    const { movies, moviesWillWatch } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row">
              <div className="col-12">
                <MovieTabs updateSortBy={this.updateSortBy}/>                
              </div>
            </div>  
            <div className="row">
              {movies.length ? <MoviesList movies={movies} handleWillWatch={this.handleWillWatch} handleDeleteMovie={this.handleDeleteMovie} /> : <Preloader />}
            </div>
            <div className={movies.length ? "row justify-content-between align-items-center mb-4" : "d-none"}>
              <button className="btn btn-danger" value="prev" onClick={this.changePage}>
                      Previous
              </button>
              <button className="btn btn-danger" value="next" onClick={this.changePage}>
                      Next
              </button>
            </div>
          </div>
          <div className="col-3">
            <MovieListWillWatch watchLaterList={moviesWillWatch} />
          </div>
        </div>
      </div>
    );
  }
};


export default App;