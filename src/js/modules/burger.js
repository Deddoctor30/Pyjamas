const burger = () => {
   const open = document.querySelector('.burger-open'),
         close = document.querySelector('.burger-close'),
         burger = document.querySelector('.burger');
   close.classList.add('hide');
   open.addEventListener('click', () => {
      openModal()
   });
   close.addEventListener('click', () => {
      closeModal();
   });
   burger.addEventListener('click', (e) => {
      if (e.target === burger) {
         closeModal();
      }
   });
   function openModal () {
      document.body.style.overflow = 'hidden';                       // запретить скролл
      open.classList.add('hide');
      close.classList.remove('hide');
      burger.style.cssText = `
      top: ${window.pageYOffset}px;
      `;
   }
   function closeModal () {
      document.body.style.overflow = '';                              // запретить скролл
      open.classList.remove('hide');
      close.classList.add('hide');
      burger.style.cssText = `
      top: -1000px;
      `;
   }
}

export default burger;