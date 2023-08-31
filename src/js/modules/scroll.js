const scroll = () => {
   const header = document.querySelector('.header__inner'),
         line = document.querySelector('.header__line'),
         width = window.getComputedStyle(header).height,
         burger = document.querySelector('.burger-open');               // если открыт бургер, но хедер не убирается
   let prevScroll = window.pageYOffset;
   let currentScroll;
   window.addEventListener('scroll', () => {
      currentScroll = scrollY;
      
      if (currentScroll > prevScroll && !burger.classList.contains('hide')) {                  // &&... если открыт бургер, но хедер не убирается
         header.style.cssText = `
            top: -${width};
         `;
         line.style.cssText = `
            top: -${width};
         `;
      } else {
         header.style.cssText = `
         top: ${0};
      `;
      line.style.cssText = `
         top: ${0};
      `;
      }
      prevScroll = currentScroll;
   })   
}

export default scroll;