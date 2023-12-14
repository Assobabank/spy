import React from 'react';
import Player from './player';
import joueurs from './joueur';

const PlayersList = () => {
  return (
    <div>
      {joueurs.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;
