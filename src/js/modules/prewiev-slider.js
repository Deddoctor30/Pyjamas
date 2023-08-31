const prewievSlider = () => {
   const mainPick = document.querySelector('.preview__img img');
   const prewiev = document.querySelectorAll('.slider__inner');
   function hide() {
      prewiev.forEach((i) => {
         i.classList.add('hidden-slider');
      });
   }
   prewiev.forEach((i) => {
      i.addEventListener('click', (e) => {
         if (i.classList.contains('hidden-slider')) {
            hide();
            mainPick.src = e.target.firstElementChild.src;
            i.classList.toggle('hidden-slider');
         }
      });
   })
}

export default prewievSlider;