const counter = (a) => {
   const parentCounter = document.querySelector('.purchase__controls'),
         purchaseCounter = document.querySelector('.purchase__counter');

   parentCounter.addEventListener('click', (e) => {
      if (e.target && e.target.dataset.count === 'plus' && purchaseCounter.value < 10) {
         purchaseCounter.value = +purchaseCounter.value + 1;
      } 
      if (e.target && e.target.dataset.count === 'minus' && purchaseCounter.value > 0) {
         purchaseCounter.value = +purchaseCounter.value - 1;
      } 
   })
}

export default counter;