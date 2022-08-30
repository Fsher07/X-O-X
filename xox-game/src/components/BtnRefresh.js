import React from 'react'

function BtnRefresh() {

  const handleRefresh = (e) => {
    document.querySelector('.table').removeAttribute('disabled');
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.innerHTML = '';
      cell.removeAttribute('disabled');
      cell.classList.remove('winner');
      document.querySelector('.draw').toggleAttribute('hidden', true);
    });
  }

  return (
    <button className='btn' onClick={handleRefresh}>Refresh</button>
  )
}

export default BtnRefresh