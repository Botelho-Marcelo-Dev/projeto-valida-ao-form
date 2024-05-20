let inputs = document.querySelectorAll("#input")
let botaoVerificar = document.getElementById("botaoVerificar")
let camposObrigatorios = document.getElementsByClassName("h5-Obrigatorio")

inputs.forEach((input, index) => {
    botaoVerificar.addEventListener('click', function(){
            if (input.value !== "") {
                input.style.borderColor = "green"
                camposObrigatorios[index].classList.remove("campo-obrigatorio")
            } else if(input.value === "") {
                input.style.borderColor = "red"
                camposObrigatorios[index].classList.add("campo-obrigatorio")
            }
    })    
})
        