const hint = document.querySelector("#button-dica");
const pass = document.querySelector("#button-senha");

hint.addEventListener("click", () => {
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

    const text = document.createElement("p");
    text.innerText = "Só coloca teu primeiro nome aí véi";
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
});

pass.addEventListener("click", () => {
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
    img.src = "./assets/images/pensante.png";
    img.style.width = "200px";
    img.style.marginBottom = "15px";

    const text = document.createElement("p");
    text.innerText = "Tenta qualquer coisa. Fé que dá certo🙏";
    // text.style.color = "white";
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
});