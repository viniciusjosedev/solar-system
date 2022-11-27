import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

export default function SolarSystem() {
  const planetas = Planets;
  console.log(planetas);
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {planetas.map((elemento) => (<PlanetCard
        key={ elemento.name }
        planetName={ elemento.name }
        planetImage={ elemento.image }
      />))}
    </div>
  );
}
