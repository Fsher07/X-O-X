import React, { useState, useEffect } from 'react'
import Cell from '../components/Cell';
import BtnRefresh from '../components/BtnRefresh';
import BackBtn from '../components/BackBtn';


function Computer() {
  const [turn, setTurn] = useState(false);

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
        }
        );
      } else {
        const nodes = document.querySelectorAll('.cell');
        const emptyCells = [...nodes].filter(n => n.textContent === '');
        const random = Math.floor(Math.random() * emptyCells.length);
        if (emptyCells.length === 0) {
          document.querySelector('.draw').removeAttribute('hidden');
        } else if (emptyCells.length > 0) {
          emptyCells[random].textContent = 'x';
          emptyCells[random].setAttribute('disabled', true);
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
            }
            );
          }
        }
      }
    }
  } ,[turn]);

  /* select random element from cells array and put marker in it */
  const handleComputer = (e) => {
    e.target.textContent = 'o';
    e.target.setAttribute('disabled', true);
    setTurn(!turn);
   }

  return (
    <main>
    <h2>X-O-X</h2>
    <div className='table'>
      {[...Array(9).keys()].map((i) => {
        return (
          <Cell key={i} id={i} onClick={handleComputer} />
        )
      }
      )}
    </div>
    <BtnRefresh />
    <div className='draw' hidden>It's a draw!</div>
    <BackBtn />
  </main>
  )
}

export default Computer