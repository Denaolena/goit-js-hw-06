let counterValue = 0;
const value = document.querySelector('#value');

const decrementEl = document.querySelector('[data-action="decrement"]');
decrementEl.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
const incrementEl = document.querySelector('[data-action="increment"]');
incrementEl.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
// console.log(value, '#value');
// console.log(incrementEl);
// console.log(decrementEl);
