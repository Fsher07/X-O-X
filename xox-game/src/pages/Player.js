import React, { useEffect, useState } from 'react'
import './Player.css'
import Cell from '../components/Cell';
import BtnRefresh from '../components/BtnRefresh';
import BackBtn from '../components/BackBtn';

export default function Player() {
  const [mark, setMark] = useState({
    nextPlayer: 'o',
    currentPlayer: 'x',
  });

  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];  
    const nodes = document.querySelectorAll('.cell');
    const table = document.querySelector('.table');
    const emptyCells = [...nodes].filter(n => n.textContent === '');
    if (nodes.length > 0) {
      const winner = lines.find(line => {
        const [a, b, c] = line;
        if( nodes[a].textContent !== '' && nodes[a].textContent === nodes[b].textContent && nodes[b].textContent === nodes[c].textContent) {
          console.log('winner:', nodes[a].textContent);
          table.setAttribute('disabled', true);
          return true;
        } else {
          return false
        };
      }
      );
      if (winner) {
        winner.forEach(i => {
          nodes[i].classList.add('winner');
        });
      } else if( emptyCells.length === 0 ) {
        document.querySelector('.draw').removeAttribute('hidden');
      }

      }
    },[mark]);

  const handleMarker = (e) => {
    if ( mark.currentPlayer === 'x' || mark.currentPlayer === '' ) {
      setMark({currentPlayer: 'o', nextPlayer: 'x'});
      e.target.innerHTML = 'o';
    } else if ( mark.currentPlayer === 'o') {
      setMark({...mark, currentPlayer: 'x', nextPlayer: 'o'});
      e.target.innerHTML = 'x';
    };
    e.target.setAttribute('disabled', true);
  }

  return (
    <main>
      <h2>X-O-X</h2>
      <h3>Next Player: {mark.nextPlayer.toUpperCase()}</h3>
      <div className='table'>
        {[...Array(9).keys()].map((i) => {
          return (
            <Cell key={i} id={i} onClick={handleMarker} />
          )
        }
        )}
      </div>
      <BtnRefresh />
      <div className='draw' hidden={true}>It's a draw!</div>
      <BackBtn />
    </main>
  )
}
