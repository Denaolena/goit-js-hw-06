const form = document.querySelector('.login-form');
// console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  // const formElements = event.currentTarget.elements;
  // const email = formElements.email.value;
  // const password = formElements.password.value;
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены.');
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  // form.reset();
  event.currentTarget.reset();
}
