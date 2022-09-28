const tinyCups = document.querySelectorAll('.box');
const litre = document.querySelector('.litres');
const percent = document.querySelector('.percent');
const abovePercent = document.querySelector('.above-percent');
const remained = document.querySelector('.center');
tinyCups.forEach((box , index) => {
     box.addEventListener('click', () => highlightcups(index));
})

function highlightcups(index) {
  if(index == tinyCups.length-1){
    if(tinyCups[index].classList.contains('fill')) {
      index--;
    }
  }
  if(tinyCups[index].classList.contains('fill') && !tinyCups[index+1].classList.contains('fill')) {
    index--;
  }
  tinyCups.forEach((box, index1) => {
      if(index1 <= index){
        box.classList.add('fill');
      } else{
          box.classList.remove('fill');
      }
  })

  bulkCup(index);
}


function bulkCup(index) {
  const fullCups = index+1;
  const totalCups = 8;
  
  if( fullCups === 0){
      percent.style.display = 'none';
      liter.innerHTML = `2L `;
  }else{
      percent.innerHTML = `${12.5*fullCups} % completed`;
      let height = fullCups * (322/8);
      percent.style.height = `${height}px`
      percent.style.display = 'block';
      litre.innerHTML = `${2-(fullCups*0.25)} L `;
      abovePercent.style.height = `${318-height}px`;
      if(fullCups>6){
        percent.style.fontSize = '20px';
        liter.style.fontSize = '20px';
        abovePercent.style.padding = '0';
      }else{
        percent.style.fontSize = '15px';
        liter.style.fontSize = '30px';
        abovePercent.style.padding = '20% 0';
      }
  }
}
