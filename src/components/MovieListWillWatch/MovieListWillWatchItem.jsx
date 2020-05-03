import React from 'react'

const MovieListWillWatchItem = props => {
  const { title, vote_average } = props.item;
  return (
    <li className="list-group-item">
      {console.log('render MovieListWillWatchItem')}
      <div className="d-flex justify-content-between">
        <div>{title}</div>
        <div>{vote_average}</div>
      </div>
    </li>
  )
}

export default MovieListWillWatchItem;