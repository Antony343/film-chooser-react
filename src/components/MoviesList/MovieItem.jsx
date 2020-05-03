import React from 'react'

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      watchLater: false
    }
  }

  handleAddClick = (e) => {
    console.log('clicked', this);
    this.setState({ watchLater: !this.state.watchLater })
    const { id, title, vote_average } = this.props.movie;
    const { watchLater } = this.state;
    this.props.handleWillWatch({ id, vote_average, title, watchLater })
}

  handleDeleteClick = (e) => {
    this.props.handleDeleteMovie(this.props.movie.id)
  }
  render() {
    console.log('render', this.constructor.name);
    const { title, vote_average, backdrop_path, poster_path } = this.props.movie;
    const { watchLater } = this.state;
    return (
      <div className="col-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`} alt="poster" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="card-title">{title}</h6>
              <p>Rating: {vote_average}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button type="button" className={watchLater ? "btn btn-danger" : "btn btn-secondary"} onClick={this.handleAddClick}>
                {this.state.watchLater ? 'Remove' : 'Will Watch'}
              </button>
              <button type="button" className="btn btn-danger" onClick={this.handleDeleteClick}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieItem;