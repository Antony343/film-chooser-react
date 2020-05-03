import React from 'react'
import MovieItem from './MovieItem.jsx'


class MoviesList extends React.Component {
  render() {
    console.log('render', this.constructor.name);
    return (
      this.props.movies.map(item => {
        return <MovieItem key={item.id} movie={item} handleWillWatch={this.props.handleWillWatch} 
        handleDeleteMovie={this.props.handleDeleteMovie}/>
      })
    )
  }
}

export default MoviesList;