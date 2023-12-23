const contato = document.getElementById("contato");

if(contato)
contato.addEventListener("submit", function(evento) {

    evento.preventDefault();
    evento.stopPropagation();

    console.log("enviou!")

});


function validaNome(elemento) {
    elemento.addEventListener("focusout", function(event) {
        event.preventDefault();

        if (this.value.trim() === "") {
            document.getElementById("mensagem").innerHTML = "Preencha o seu nome!";
            this.classList.remove("valid");
            this.classList.add("erro");
            this.parentNode.classList.remove("valid");
            this.parentNode.classList.add("erro");

            return false;
        } else {
            document.getElementById("mensagem").innerHTML = "";
            this.classList.remove("erro");
            this.classList.add("valid");
            this.parentNode.classList.remove("erro");
            this.parentNode.classList.add("valid");
        }
    });
}

let camposObrigatorios = document.querySelectorAll("input.obrigatorio");

for( let emFoco of camposObrigatorios) {
    validaNome(emFoco)
}



function validaEmail(elemento) {

    elemento.addEventListener("focusout", function(event) {
     
        event.preventDefault();


        if(this.value.trim() === "") {
            document.getElementById("mensagem").innerHTML = "Preencha o seu email!";
            this.classList.remove("valid");
            this.classList.add("erro");
            this.parentNode.classList.remove("valid");
            this.parentNode.classList.add("erro");

            return false;
        } else {
            document.getElementById("mensagem").innerHTML = "";
            this.classList.remove("erro");
            this.classList.add("valid");
            this.parentNode.classList.remove("erro");
            this.parentNode.classList.add("valid");
        }
 });
}

let camposEmail = document.querySelectorAll("input.email");

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}