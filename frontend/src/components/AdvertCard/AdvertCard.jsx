import './AdvertCard.css'

export const AdvertCard = () => {
  return (
    <article className="advertCardContainer">
      <div className="advertCardImage">
        <img src="/semillas.jpg" alt="foto_semillas" />
      </div>
      <div className="advertCardText">
        <h2>Nombre semilla</h2>
        <p>Origen: Recogida</p>
      </div>
    </article>
  );
};
