import "../../pages/Panel/Panel.css";
import "./ShortCalendar.css"

export const ShortCalendar = () => {
  return (
    <section className="panelContent_Calendar">
      <div className="panelContent_Calendar_Moon">
        <img src="/MOON-icon.svg" alt="icono luna creciente" />
        <p className="moonPhase">CRECIENTE</p>
        <div className="date">
          <hr />
          <h3>19 de abril</h3>
          <p>PRIMAVERA</p>
        </div>
      </div>
      <hr className="divisor"/>
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
        <a href="/wait-for-it">VER CALENDARIO</a>
      </div>
    </section>
  );
};
