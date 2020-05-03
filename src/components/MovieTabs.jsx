import React from "react";

const MovieTabs = (props) => {

  const handleOnChange = (e) => {
    props.updateSortBy(e.currentTarget.value)
  }
  return (
    <React.Fragment>
      {console.log('render Tabs')}
      <div className="form-group col-12">
        <label htmlFor="sortBy">Выберите фильтр: </label>
        <select
          className="form-control"
          id="sortBy"
          onChange={handleOnChange}
        >
          <option value="popularity.desc">Популярные по убыванию</option>
          <option value="popularity.asc">Популярные по возраствнию</option>
          <option value="vote_average.desc">Рейтинг по убыванию</option>
          <option value="vote_average.asc">Рейтинг по возрастанию</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default MovieTabs;