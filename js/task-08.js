const form = document.querySelector('.login-form');

form.addEventListener('submit', onForSubmit);

function onForSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please, fill in all the fields!')
    }

    const dataForm = {
        email: email.value,
        password: password.value,
    }

    console.log(dataForm);
    event.currentTarget.reset()
}
//========================

    // const formElements = event.currentTarget.elements;
    // console.dir(formElements);
    // const email = formElements.email.value;
    // const password = formElements.password.value;

    // const formData = {
    //     email,
    //     password
    // }


    // console.log(formData);

    // const formData = new FormData(event.currentTarget)
    // console.log(formData);

    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit => name', name);
    //     console.log('onFormSubmit => value', value);
    // })

