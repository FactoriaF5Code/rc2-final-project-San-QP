import '../styles/Panel.css'

export const ShortCalendar = () => {
  return (
    <section className="panelContent_Calendar">
      <div className="panelContent_Calendar_Moon">
        <img src="/MOON-icon.svg" alt="icono luna creciente" />
        <p>CRECIENTE</p>
        <div>
          <hr />
          <h3>19 de marzo</h3>
        </div>
        <p>PRIMAVERA</p>
      </div>
      <div className="panelContent_Calendar_Tasks">
        <div>
          <h3>TAREAS:</h3>
          <p>
            Según el calendario lunar estas son las tareas más propicias para
            hacer en el día de hoy:
          </p>
        </div>
        <ul>
          <li>Regar plantas en flor.</li>
          <li>Hacer injertos.</li>
        </ul>
        <a href="#">VER CALENDARIO</a>
      </div>
    </section>
  );
};
