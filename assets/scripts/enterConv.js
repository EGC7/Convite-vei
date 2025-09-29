function createEnvelope() {
    const envelope = document.createElement("div");
    const flap = document.createElement("div");
    const seal = document.createElement("div");
    const content = document.createElement("div");
    const mapBtn = document.createElement("button");
    const goButton = document.createElement("button");
    const notGoButton = document.createElement("button");
    const buttonSect = document.createElement("footer");

    envelope.classList.add("envelope");
    flap.classList.add("flap");
    seal.classList.add("seal");
    content.classList.add("content");
    mapBtn.classList.add("map-btn");
    goButton.classList.add("vou-btn");
    notGoButton.classList.add("notvou-btn");

    content.innerHTML = "<p><b>Endereço:</b> Bancrévea - Rod. Mário Covas</p> <p><b>Data:</b> 19/10/2025</p <p><b>Horário:</b> 10:00 - 18:00</p>"
    mapBtn.innerText = "Ver rota no Google Maps";

    seal.addEventListener("click", () => {
        flap.classList.add("open");
        seal.style.display = "none";
        setTimeout(() => {
            content.classList.add("show");
            addSongToParty();
        }, 600);
    });

    mapBtn.addEventListener("click", () => {
        const destino = "Rod. Mário Covas, Km-05 - Coqueiro, Belém - PA, 66652-000";
        const url = `https://www.google.com/maps/dir/?api=1&origin=current+location&destination=${encodeURIComponent(destino)}`;
        window.open(url, "_blank");
    });
    
    goButton.innerText = "Eu Vouu";
    notGoButton.innerText = "Not vou irr";
    
    goButton.addEventListener("click", () => {
        vou();
    });

    notGoButton.addEventListener("click", () => {
        Nvou();
    });

    envelope.appendChild(flap);
    envelope.appendChild(seal);
    envelope.appendChild(content);
    content.appendChild(mapBtn);
    content.appendChild(buttonSect);
    buttonSect.appendChild(notGoButton);
    buttonSect.appendChild(goButton);
    document.body.appendChild(envelope);
}

function addPartyImgs(){
    for (let _=4; _<7; _++){
        const img = document.createElement("img");
        img.src = `./assets/images/party-img${_}.png`;
        img.classList.add("party-img");
        img.id = `party${_}`
        document.body.appendChild(img);
    }
}

function addSongToParty(){
     const CD = document.createElement("img");
     CD.style.transform = "translateY(200px)";
     CD.src = "./assets/images/CD-Pixel.png"
     const sound = document.createElement("audio");

     sound.setAttribute("src", "./assets/audio/partySong.mp3");

     CD.id = "partySong";
     document.body.appendChild(CD);
     document.body.appendChild(sound);

    setTimeout(() => {
         CD.style.transition = "transform 1s ease-in-out";
         CD.style.transform = "translateY(0px)";
         setTimeout(() => {
             CD.src = "./assets/images/CD-HD.png";
             setTimeout(() => {
                 CD.style.animation = "rotateCD 2s infinite linear";
                 sound.play();
             }, 600);
        }, 200);
     }, 1200);

}

function beforeInfos(){
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "flex-start";
    overlay.style.zIndex = "999";

    
    const popup = document.createElement("div");
    popup.style.width = "350px";
    popup.style.padding = "20px";
    popup.style.background = "#fff";
    popup.style.borderRadius = "12px";
    popup.style.textAlign = "center";
    popup.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
    popup.style.transform = "translateY(-100%)"; 
    popup.style.transition = "transform 0.5s ease";

    
    const img = document.createElement("img");
    img.src = "./assets/images/nerdEmoji.jpeg";
    img.style.width = "200px";
    img.style.marginBottom = "15px";
    img.style.background = "transparent";

    const text = document.createElement("p");
    text.innerText = "Eita eita, oiii. Tô te convidando pro meu aniversárioooooo🎉\n\nAs informações que eu achei mais importantes tão no envelope. Maaaas, se tiver algo que querias saber, pode me mandar mensagem perguntando mesmooo.";
    text.style.margin = "10px 0";
    text.style.fontSize = "18px";
    text.style.fontWeight = "bold";

    const okBtn = document.createElement("button");
    okBtn.innerText = "Ok";
    okBtn.style.padding = "10px 20px";
    okBtn.style.background = "#007bff";
    okBtn.style.color = "#fff";
    okBtn.style.border = "none";
    okBtn.style.borderRadius = "6px";
    okBtn.style.cursor = "pointer";

    
    okBtn.addEventListener("click", () => {
        setTimeout(() => {
            popup.style.transform = "translateY(-370px)";
            img.src = "./assets/images/drip.png";
        }, 50);
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 550);
    });

    
    popup.appendChild(img);
    popup.appendChild(text);
    popup.appendChild(okBtn);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    
    setTimeout(() => {
        popup.style.transform = "translateY(100px)";
    }, 50);
}

function vou(){
    
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "flex-start";
    overlay.style.zIndex = "999";

    
    const popup = document.createElement("div");
    popup.style.width = "350px";
    popup.style.padding = "20px";
    popup.style.background = "#fff";
    popup.style.borderRadius = "12px";
    popup.style.textAlign = "center";
    popup.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
    popup.style.transform = "translateY(-100%)"; 
    popup.style.transition = "transform 0.5s ease";

    
    const img = document.createElement("img");
    img.src = "./assets/images/show.png";
    img.style.width = "200px";
    img.style.marginBottom = "15px";
    img.style.background = "transparent";

    const text = document.createElement("p");
    text.innerText = "Que bommmm. Te espero laaa🎉\nQualquer dúvida manda mensagemm";
    text.style.margin = "10px 0";
    text.style.fontSize = "18px";
    text.style.fontWeight = "bold";

    const okBtn = document.createElement("button");
    okBtn.innerText = "Ok";
    okBtn.style.padding = "10px 20px";
    okBtn.style.background = "#007bff";
    okBtn.style.color = "#fff";
    okBtn.style.border = "none";
    okBtn.style.borderRadius = "6px";
    okBtn.style.cursor = "pointer";

    
    okBtn.addEventListener("click", () => {
        setTimeout(() => {
            popup.style.transform = "translateY(-370px)";
        }, 50);
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 550);
    });

    
    popup.appendChild(img);
    popup.appendChild(text);
    popup.appendChild(okBtn);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    
    setTimeout(() => {
        popup.style.transform = "translateY(100px)";
    }, 50);
}

function Nvou(){
    
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "flex-start";
    overlay.style.zIndex = "999";

    
    const popup = document.createElement("div");
    popup.style.width = "350px";
    popup.style.padding = "20px";
    popup.style.background = "#000";
    popup.style.borderRadius = "12px";
    popup.style.textAlign = "center";
    popup.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
    popup.style.transform = "translateY(-100%)"; 
    popup.style.transition = "transform 0.5s ease";

    
    const img = document.createElement("img");
    img.src = "./assets/images/affVei.png";
    img.style.width = "200px";
    img.style.marginBottom = "15px";
    img.style.background = "transparent";

    const text = document.createElement("p");
    text.innerText = "Tudo Bemm, eu entendoo. Vai fazer falta";
    text.style.color = "white";
    text.style.margin = "10px 0";
    text.style.fontSize = "18px";
    text.style.fontWeight = "bold";

    const okBtn = document.createElement("button");
    okBtn.innerText = "Ok";
    okBtn.style.padding = "10px 20px";
    okBtn.style.background = "#007bff";
    okBtn.style.color = "#fff";
    okBtn.style.border = "none";
    okBtn.style.borderRadius = "6px";
    okBtn.style.cursor = "pointer";

    
    okBtn.addEventListener("click", () => {
        setTimeout(() => {
            img.style.transition = "opacity 1.2s ease-in-out";
            img.style.opacity = "0"; 
            setTimeout(() => {
                img.src = "./assets/images/presente.png";
                img.style.opacity = "1";
                text.innerText = "Mas aguardo o presente🙏";
                setTimeout(() => {
                    setTimeout(() => {
                        popup.style.transform = "translateY(-370px)";
                    }, 50);
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                    }, 550);
                }, 1350);

                
            }, 1250);
        }, 50);
    });

    
    popup.appendChild(img);
    popup.appendChild(text);
    popup.appendChild(okBtn);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    
    setTimeout(() => {
        popup.style.transform = "translateY(100px)";
    }, 50);
}

function newBodyFunction() {
    const link = document.querySelector("#link-CSS");
    beforeInfos()
    document.body.removeChild(document.querySelector("audio"));
    link.href = "./assets/styles/newBody.css";
    addPartyImgs();
    createEnvelope();
}

export default newBodyFunction;