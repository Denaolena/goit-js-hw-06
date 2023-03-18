const form = document.querySelector('.login-form');
// console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  //   console.dir(formElements);

  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены.');
  }
  const formData = {
    email,
    password,
  };
  form.reset();
  console.log(formData);
}
