import './Rules.css';
import React from 'react';

function Rules() {
  return (
    <main className="rules">
      <div className="term">
        <dt>Tierra</dt>
        <dd>
          Hexagono con 3 subdivisiones en forma de hexagonos que se usa para
          formar el tablero. Cada jugador tiene un{' '}
          <strong>mazo de 8 tierras</strong>.
        </dd>
      </div>
      <div className="term">
        <dt>Unidad</dt>
        <dd>
          Las unidades tienen nombre, tipo, estadisticas (Vida, Movimiento y
          Ataque) y habilidades. Cada jugador tiene un{' '}
          <strong>mazo de 6 unidades</strong>.
        </dd>
      </div>
      <div className="term">
        <dt className="stat">Vida</dt>
        <dd>
          Una de las estadisticas de cada unidad. Indica la cantidad de daño que
          una unidad puede recibir antes de morir.
        </dd>
      </div>
      <div className="term">
        <dt className="stat">Movimiento</dt>
        <dd>
          Una de las estadisticas de cada unidad. Indica la cantidad de casillas
          que una unidad puede moverse cuando se usa una accion de movimiento.
        </dd>
      </div>
      <div className="term">
        <dt className="stat">Ataque</dt>
        <dd>
          Una de las estadisticas de cada unidad. Indica la cantidad de daño que
          causa una unidad cuando usa una acction de ataque.
        </dd>
      </div>
    </main>
  );
}

export default Rules;
