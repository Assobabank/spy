import React from 'react';

const Player = ({ nom, equipe, nationalite, numero_maillot, age, imageUrl }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{nom}</h5>
        <p className="card-text">
          Equipe: {equipe}<br />
          Nationalité: {nationalite}<br />
          Numéro de maillot: {numero_maillot}<br />
          Age: {age}
        </p>
      </div>
    </div>
  );
};

export default Player;
