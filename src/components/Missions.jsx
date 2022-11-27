import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missoes from './../data/missions';

export default class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missoes.map((elemento) => (
          <MissionCard
            key={ elemento.name }
            name={ elemento.name }
            year={ elemento.year }
            country={ elemento.country }
            destination={ elemento.destination }
          />
        ))}
      </div>
    );
  }
}
