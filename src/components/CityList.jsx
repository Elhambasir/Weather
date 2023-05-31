import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CityList({ city, getWeatherImage }) {
  return (

    <div className="mobile-wrapper-city-list-items">
      <div className="mobile-wrapper-city-list-item1">
        <img src={getWeatherImage(city.main.temp)} alt="sdfsdfa" width="50" />
        <button type="button">
          icon
        </button>
      </div>
      <div className="mobile-wrapper-city-list-item2">
        <h4 className="mobile-wrapper-city-list-item-name-text">{city.name}</h4>
        <p className="mobile-wrapper-city-list-item-name-text">
          {city.main.temp}
          °C
        </p>
      </div>
    </div>
  );
}

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  getWeatherImage: PropTypes.string.isRequired,
};
export default CityList;
