import PropTypes from 'prop-types';

export default function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: 'Terra',
  planetImage: 'https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low',
};
