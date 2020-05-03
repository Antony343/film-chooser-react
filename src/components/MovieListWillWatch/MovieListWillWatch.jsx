import React from 'react';
import MovieListWillWatchItem from './MovieListWillWatchItem'

class MovieListWillWatch extends React.Component {

  render() {
    console.log('render', this.constructor.name);
    const { watchLaterList } = this.props;
    let watchLater = watchLaterList.map(item => {
      return <MovieListWillWatchItem key={item.id} item={item} />
    })

    return (
      <div className="position-fixed">
        <h4 >Will Watch: {this.props.watchLaterList.length} movies </h4>
        <ul className="list-group">{watchLater}</ul>
      </div>
    )
  }
}

export default MovieListWillWatch;