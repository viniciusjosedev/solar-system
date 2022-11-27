import PropTypes from 'prop-types';

export default function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card">
      <p data-testid="mission-name">{ name }</p>
      <p data-testid="mission-year">{ year }</p>
      <p data-testid="mission-country">{ country }</p>
      <p data-testid="mission-destination">{ destination }</p>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: 'string',
  year: 'string',
  country: 'string',
  destination: 'string',
};
