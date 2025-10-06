const nameInput = document.querySelector("#login-name");
const passInput = document.querySelector("#login-pass");
import conv from "./convideidos.js";

let inpV = nameInput.value.toString().toLowerCase()

nameInput.addEventListener("input", () => {
    if (inpV === "na"){
        nameInput.value = `Nathan Gomis`;
        nameInput.readOnly = true;
    } else if (inpV === "marc"){
        nameInput.value = `Marcus Ginicius`;
        nameInput.readOnly = true;
    } else if (inpV === "mari"){
        nameInput.value = `Maria Clara`;
        nameInput.readOnly = true;
    } else if (inpV === "ga"){
        nameInput.value = `Gabs Doide`;
        nameInput.readOnly = true;
    } else if (inpV === "pa"){
        nameInput.value = `Paula Vei`;
        nameInput.readOnly = true;
    } else if (inpV === "jo"){
        nameInput.value = `João Merdinha`;
        nameInput.readOnly = true;
    } else if (inpV === "an"){
        nameInput.value = `Angelo Danto`;
        nameInput.readOnly = true;
    } else if (inpV === "cae"){
        nameInput.value = `Caetano Caetano`;
        nameInput.readOnly = true;
    } else if (inpV === "may"){
        nameInput.value = `Mayke Wedrel`;
        nameInput.readOnly = true;
    } else if (inpV == "pye"){
        nameInput.value = 'Pyetro Martins';
        nameInput.readOnly = true;
    } else if (inpV == "gab"){
        nameInput.value = 'Gabriel Crossfit de Vento';
        nameInput.readOnly = true;
    }
    inpV = nameInput.value.toString().toLowerCase()
    if (nameInput.readOnly){
        valid();
    }
})

function valid(){
    let c = 0;
    
    for (const boy in conv){
        const name = `${boy} ${conv[boy][0]}`.toLowerCase();
        if (inpV == name){
            let passV = passInput.value.toString()
            passInput.addEventListener("input", () => {
                passInput.value = `${passV}${conv[boy][1][c]}`
                passV = passInput.value.toString()        
                c+=1
                if (c == conv[boy][1].length){ 
                    passInput.readOnly = true;
                }
            })
        }
    }
}

function isValid(){
    if ((nameInput.readOnly) && (passInput.readOnly)){
        return true
    }
    return false
}

function errorLogin(){
    const hint = document.querySelector("#button-dica");
    hint.style.transition = "scale 1s ease-out";
    hint.innerHTML = "Clique em Mim";
    hint.style.scale = "15";
    setTimeout(() => {
        hint.style.scale = "1";
    }, 1100);
    setTimeout(() => {
        hint.innerHTML = "Quero dica";
    }, 2100);
}

function getUser(){
    return nameInput.value.toString();
}

export {isValid, errorLogin, getUser};