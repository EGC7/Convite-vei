import conv from "./convideidos.js";
const passwords = []
for (const mano in conv){
    passwords.push(conv[mano][1])
}

export default passwords;


const showPass = document.querySelector("#showPass");

let hidden = true;
showPass.addEventListener("click", () => {
    const type = hidden ? "text" : "password"
    document.querySelector("#login-pass").setAttribute("type", type)
    hidden = !hidden
})