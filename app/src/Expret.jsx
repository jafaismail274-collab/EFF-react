import Evenements from "./Evenements.jsx"
function Expert({ expert }) {
  return (
    <li>
      <h3>{expert.nom}</h3>

      <Evenements evenements={expert.événements} />
    </li>
  );
}

export default Expert;