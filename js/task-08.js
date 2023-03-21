const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    const inputValue = {
        email,
        password,
    }
    if (email.value === "" || password.value === "") {
        window.alert("Всі поля повинні бути заповнені!");
        return
             }

        console.log(`Email: ${email.value}, Password: ${password.value} `) 
 event.target.reset()
});