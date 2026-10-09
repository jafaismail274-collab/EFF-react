import expertsData from "./data.js";
import Expert from "./Expert.jsx";

function ExpertsList() {
  return (
    <div>
      <h2>Liste des experts</h2>

      <ul>
        {expertsData.map((expert, index) => (
          <Expert key={index} expert={expert} />
        ))}
      </ul>
    </div>
  );
}

export default ExpertsList;