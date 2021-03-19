import './Units.css';
import React from 'react';
import harald from '../../assets/images/harald.jpg';

function Units() {
  return (
    <div className="card">
      <div className="unit-name">Harald king of Elves</div>
      <div
        className="unit-art"
        style={{
          background: `url(${harald}) no-repeat center`,
          backgroundSize: '100%',
        }}
      ></div>
      <div className="unit-type">Elf Noble</div>
      <div className="unit-skills">Don't know yet</div>
      <div className="unit-stats">Mov: 3 Atk: 3 Health: 17</div>
      {/*  */}
    </div>
  );
}

export default Units;
