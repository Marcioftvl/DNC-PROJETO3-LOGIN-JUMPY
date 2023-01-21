// JavaScript source code

const register = document.getElementById("bntRegister")

register.addEventListener("click", inputsValidation);

function inputsValidation(button) {
    button.preventDefault()

    const name = document.getElementById("iptName");
    const email = document.getElementById("iptEmail");
    const tel = document.getElementById("iptTel");
    const cpf = document.getElementById("iptCpf");
    const pass = document.getElementById("iptPass");

    const sName = document.getElementsByName("vName");
    const sEmail = document.getElementsByName("vEmail");
    const sTel = document.getElementsByName("vTel");
    const sCpf = document.getElementsByName("vCpf");
    const sPass = document.getElementsByName("vPass");

    let inputsEmpty = []
    inputsEmpty.push(checkEmptyInput(name, sName));
    inputsEmpty.push(checkEmptyInput(email, sEmail));
    inputsEmpty.push(checkEmptyInput(tel, sTel));
    inputsEmpty.push(checkEmptyInput(cpf, sCpf));
    inputsEmpty.push(checkEmptyInput(pass, sPass));

    let registerOk = document.getElementById("registerSucess")

    for (let i = 0; i <= inputsEmpty.length; i++) {
        if (inputsEmpty[i] == true) {
            registerOk.classList.remove("valid-register")
            registerOk.classList.add("invalid-register")
            registerOk.innerHTML = "Campos obrigatórios não registrados."
            break
        } else {
            registerOk.classList.remove("invalid-register")
            registerOk.classList.add("valid-register")
            registerOk.innerHTML = "Sucesso"
        }
    }
}

function checkEmptyInput(input, span) {
    let invalid = true
    if (input.value == "") {
        span.item(0).classList.remove("valid-input");
        span.item(0).classList.add("invalid-input");
        invalid = true
    } else {
        span.item(0).classList.remove("invalid-input");
        span.item(0).classList.add("valid-input");
        invalid = false
    }
    return invalid
}
