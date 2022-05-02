const products = () => {
   const counter = document.querySelector('.purchase__counter');
   const inner = document.querySelector('.purchase__inner');
   const title = document.querySelector('.info__title');
   let temp = 0;

   inner.addEventListener('click', (e) => {
      if (e.target && e.target.dataset.add) {
         if (counter.value > 0 && temp === 0) {
            temp = 1;
   
            const messageAdd = document.createElement('div'); 
            messageAdd.classList.add('message');
            let a = "";
            let b = "";
            if (counter.value < 5 && counter.value > 1) {
               a = 'a';
               b = 'о';
            } if (counter.value > 4) {
               a = 'ов';
               b = 'о';
            }
            messageAdd.style.cssText = `
                  display: block;
                  margin: 15px 0px -15px 0px;
                  text-align: center;
               `;
            if (e.target.dataset.add === 'add') {
               messageAdd.textContent = `В корзину добавлен${b} ${counter.value} товар${a}`;
            } else {
               messageAdd.textContent = `Товар "${title.textContent}" добавлен в избранное`;
            }
            inner.insertAdjacentElement('afterend', messageAdd);
   
            setTimeout(() => {
               messageAdd.remove();
               temp = 0;
            }, 2000);
         }
      }
      
   });
}

export default products;