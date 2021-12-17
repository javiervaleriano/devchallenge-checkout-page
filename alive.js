import F from './functions.js';
// Contador de la cantidad de items en el carrito de compras
let counters = {
    qtyBackbag: '1',
    qtyShoes: '1'
};
const total = document.querySelector('.quantity__total'),
      containerBtns = document.querySelectorAll('.item__cont__btns');

containerBtns.forEach(function(cont) {
    const inputNum = cont.querySelector('input[type=number]'),
          minusBtn = cont.querySelector('.item__btn--minus'),
          plusBtn = cont.querySelector('.item__btn--plus');
          
// Asigna eventos a los botones de las cantidades de items
    minusBtn.addEventListener('click', function() {
        if (parseInt(inputNum.value) > 1) {
            inputNum.value = parseInt(inputNum.value) - 1;

            this.classList.add('item__btn--minus--active');
            setTimeout(() => this.classList.remove('item__btn--minus--active'), 65);
        }


        F.determineInput(inputNum, counters);

        F.setTotal(total, counters);
    });

    plusBtn.addEventListener('click', function() {
        if (parseInt(inputNum.value) < 100) {
            inputNum.value = parseInt(inputNum.value) + 1;
            
            this.classList.add('item__btn--plus--active');
            setTimeout(() => this.classList.remove('item__btn--plus--active'), 65);
        }


        F.determineInput(inputNum, counters);

        F.setTotal(total, counters);
    });
});


// Control de comportamiento del formulario
const form = document.querySelector('.form'),
      fieldsTxt = document.querySelectorAll('.field--text'),
      selectInput = document.querySelector('.select__shipping'),
      inputCheckbox = document.querySelector('input[type=checkbox]');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    Swal.fire({
        icon: 'success',
        title: 'Datos enviados',
        text: 'Formulario enviado exitosamente.'
    });

    F.byDefault(inputCheckbox, counters, containerBtns, total, selectInput, form);
});
// document.querySelector('input[type=checkbox]')
// checkbox, counters, containerBtns, total, form

// Apenas se hace click encima de la etiqueta <p></p> que envuelve al input en el formulario, se enfoca su input hijo
fieldsTxt.forEach(field => {
    field.addEventListener('click', function() {
        this.querySelector('.input--text').focus();
    });
});

// Cuando ocurre un cambio en el valor del select del formulario, se ejecuta la función 'defaultSelect'
selectInput.addEventListener('change', function() {
    F.defaultSelect(this, this.value);
});
F.defaultSelect(selectInput);

// Link del footer
const footerLink = document.querySelector('.footer__link');
F.randomLink(footerLink);

// Ejecución constante de randomLink cada 5 segundos
setInterval(() => {
    F.randomLink(footerLink);
}, 5000);