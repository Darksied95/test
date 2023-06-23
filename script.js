const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')


form.addEventListener('submit', e => {
    e.preventDefault()
    if ((!(/[0-9]/).test(password) || !(/[A-Z]/).test(password) || !(/[a-z]/).test(password))) {
        error.classList.add('display')
        return
    } else {
        alert("Form Submitted")
    }

})




console.log(/[0-9]/.test(password));
console.log(/[A-Z]/.test(password));
console.log();