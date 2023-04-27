function aparecer(params) {
    let mydiv2 = document.querySelector('.img-principal');
    let mydiv1 = document.querySelector('.img-secundaria');
   
    mydiv1.classList.remove('arriba');
    mydiv1.classList.add('bajar');
    mydiv2.classList.remove('bajar')
    mydiv2.classList.add('arriba')

    let button1 = document.querySelector('.cont-botones button.active');
    let button2 = document.querySelector('.cont-botones button:not(.active)');
    button1.classList.remove('active');
    button2.classList.add('active');
 }


function desaparecer(params) {
    let mydiv2 = document.querySelector('.img-principal');
    let mydiv1 = document.querySelector('.img-secundaria');
    

    mydiv2.classList.remove('arriba')
    mydiv2.classList.add('bajar');
    mydiv1.classList.remove('bajar')
    mydiv1.classList.add('arriba')

    let button1 = document.querySelector('.cont-botones button.active');
    let button2 = document.querySelector('.cont-botones button:not(.active)');
    button2.classList.add('active');
    button1.classList.remove('active');
   }
   