const prices = {
    backbagUnit: 54.99,
    shoesUnit: 74.99,
    shippingPrice: 19
},
      totalQty = 148.98;

// Vuelve inmodificable el objeto 'prices'
Object.freeze(prices);

// Establece la cantidad total de la compra
function setTotal(elmDom, counters) {
    let quantity = (prices.backbagUnit * parseInt(counters.qtyBackbag)) + (prices.shoesUnit * counters.qtyShoes) + prices.shippingPrice;
    elmDom.innerText = `$${quantity.toFixed(2)}`;
}

// Funciones de los botones
function determineInput(input, counters) {
    if (input.getAttribute('id') === 'shoes-qty') {
        counters.qtyShoes = input.value;
    } else {
        counters.qtyBackbag = input.value;
    }
}

// Determinar si el select tiene seleccionado el valor por defecto
function defaultSelect(select, val) {
    if (!val) {
        select.classList.add('select__shipping--default');
    } else {
        select.classList.remove('select__shipping--default');
    }
}

// Establece los valores por defecto de la interfaz
function byDefault(checkbox, counters, containerBtns, total, selectInput, form) {
    checkbox.checked = false;

    counters = {
        qtyBackbag: '1',
        qtyShoes: '1'
    };

    containerBtns.forEach(cont => cont.querySelector('input[type=number]').value = 1);

    total.innerText = `$${totalQty}`;

    selectInput.classList.add('select__shipping--default');
    form.querySelectorAll('.input').forEach(input => input.value = '');
}

// Establece un enlace aleatoriamente en el footer de la página
const profiles = [
    'https://github.com/javiervaleriano',
    'https://codepen.io/javiervaleriano',
    'https://twitter.com/javaleriano2',
    'https://devchallenges.io/portfolio/javiervaleriano'
];

function randomLink(link) {
    link.href = profiles[Math.floor(Math.random() * profiles.length)];
};

const allFuncs = {
    setTotal,
    determineInput,
    randomLink,
    defaultSelect,
    byDefault
};

export default allFuncs;