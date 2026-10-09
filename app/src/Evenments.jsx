function Evenements({ evenements }) {
  const totalGeneral = evenements.reduce(
    (total, e) => total + e.cout_journalier * e.durée,
    0
  );

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Thème</th>
          <th>Date début</th>
          <th>Date fin</th>
          <th>Coût journalier</th>
          <th>Durée</th>
          <th>Coût total</th>
        </tr>
      </thead>

      <tbody>
        {evenements.map((e, index) => (
          <tr key={index}>
            <td>{e.thème}</td>
            <td>{e.date_debut}</td>
            <td>{e.date_fin}</td>
            <td>{e.cout_journalier} DH</td>
            <td>{e.durée} jours</td>
            <td>{e.cout_journalier * e.durée} DH</td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <th colSpan="5">Coût total de l'ensemble des événements</th>
          <th>{totalGeneral} DH</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Evenements;