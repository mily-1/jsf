function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid;

}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }else{
        return true;
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password")
}

function login(){
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "index.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function cadastro(){
    firebase.auth().createUserWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "index.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário nao encontrado";
    }
    return error.message;
}

function registrar(){
    window.location.href = "registro.html";
}







const controls = document.querySelectorAll(".control")
const item = document.querySelectorAll(".item")
const MaxItems = item.length

let currentItem = 0

item.forEach(item => {})

controls.forEach(control => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left")

    console.log(control.classList.value, isLeft)

    isLeft ? currentItem-- : currentItem++

    if (currentItem >= MaxItems) currentItem = 0
    if (currentItem < 0) currentItem = MaxItems - 1

    console.log(currentItem)

    item.forEach((item, index) => {
      item.classList.remove("current-item")

      if (index === currentItem) {
        item.scrollIntoView({
          inline: "center",
          behavior: "smooth"
        })

        item.classList.add("current-item")
      }
    })

    /* --- OBS: other response  --------------------  

      item[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
      block: "nearest"
      })

      item[currentItem].classList.add("current-item")
    
    */
  })
})
