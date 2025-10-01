import {isValid, errorLogin, getUser} from "./nameInput.js";
import newBodyFunction from "./enterConv.js";

const source = ["balloons1", "balloons2"];
const sect = document.querySelector("#balloons")
const qtdBalloons = 40;

for (let i=0; i<qtdBalloons; i++){
    const ballon = document.createElement("img");
    ballon.classList.add("balao");
    const r = Math.floor(Math.random() * 2)
    ballon.src = `./assets/images/${source[r]}.png`;
    if (r == 0){
        ballon.style.width = "200px";
        ballon.style.height = "200px";
    } else{
        ballon.style.width = "300px";
        ballon.style.height = "300px"
    }
    sect.appendChild(ballon);
}

function jumpScare(){
    const user = getUser().split(" ")[0];
    const boasVindas = document.createElement("img");
    let songTime, songSource;

    let source;
    if ((user == "Nathan") || (user == "Marcus")){
        source = "beijoca";
        songTime = 1;
        songSource = "beijoca";
    } else if (user == "Paula"){
        source = "mikee";
        // songTime = 21;
        // songSource = "NOOSSA";
    } else if (user == "Maria"){
        source = "pensante";
        // songTime = 1;
        // songSource = "YayEffect";
    } else if (user == "Gabs"){
        source = "party-img3"
        // songTime = 16;
        // songSource = "LOW";
    } else if (user == "João"){
        source = "kkshrek";
        songTime = 1;
        songSource = "sherek";
    } else if (user == "Mayke"){
        source = "party-img3"
        songTime = 1;
        songSource = "sherek";
    } else if (user == "Angelo"){
        source = "pensante";
        // songTime = 1;
        // songSource = "YayEffect";
    } else if (user == "Caetano"){
        source = "pensante";
        // songTime = 1;
        // songSource = "YayEffect";
    }
    
    boasVindas.src = `./assets/images/${source}.png`;
    boasVindas.id = "jumpScare";
    document.body.appendChild(boasVindas);
    document.querySelector("audio").setAttribute("src", `./assets/audio/${songSource}.mp3`);
    document.querySelector("audio").currentTime = songTime;
    document.querySelector("audio").play();
}

function balloonsUp(){
    sect.style.opacity = 1;
    document.body.style.transition = "background-color 1.2s ease-out";
    document.body.style.backgroundColor = "black";

    document.querySelector("#login").style.transition = "opacity 1.2s ease-out";
    document.querySelector("#login").style.opacity = "0";
    document.querySelectorAll(".party-img").forEach(img => {
        img.style.transition = "opacity 1.2s ease-out";
        img.style.opacity = "0";
    })
    
    setTimeout(() => {
        sect.style.animation = "balloonUp 5s ease-in-out";
        
        setTimeout(() => {
            document.querySelector("#login").style.display = "none";    
            document.querySelectorAll(".party-img").forEach(img => {
                document.body.removeChild(img);
            })
        }, 1200);
        setTimeout(() => {
            jumpScare()
        }, 3750);

        setTimeout(() => {
            sect.style.opacity = 0;
            setTimeout(() => {
                    sect.style.display = "none";
                    document.body.removeChild(document.querySelector("#jumpScare"));
                    newBodyFunction();
                    setTimeout(() => {
                        document.body.style.backgroundColor = "";    
                    }, 500);
            }, 250)
        }, 4700)
    }, 250)



}

document.querySelector("#continue").addEventListener("click", () => {
    const validation = isValid();
    if (!validation){
        alert("IHHH NAO SABE O LOGINKKKKKKKKKKKKKKKKKKKKKKKKK")
        errorLogin();
    } else{
        document.querySelector("audio").play();
        balloonsUp();
    }
})