function extrairInfo(doc){
    let div = document.querySelector("#boxSurprise2");
    doc.querySelectorAll(".card__text")
        .forEach(texts => {
            div.appendChild(texts)
        });
}

function teste(){
    fetch("https://corsproxy.io/?url=https://www.grindosaur.com/en/games/digimon-world-next-order")
        .then(resp => {
            return resp.text();
        })
        .then(text => {
            let d = new DOMParser();
            let doc = d.parseFromString(text,"text/html");
            console.log(doc)
            extrairInfo(doc)
        })
        .catch(err => {
            document.querySelector("#boxSurprise2").innerHTML = err.message;
        })
}

function baixarImagem(urlimg){
    fetch("https://corsproxy.io/?url=" + urlimg)
        .then(resp => {
            return resp.blob();
        })
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            let img = document.createElement("img")
            img.src = imageObjectURL
            document.querySelector("#boxSurprise").appendChild(img)
        })
        .catch(err => {
            document.querySelector("#boxSurprise") = err.message;
        })
}

function testeImagem(){
    const image = ["digimon-world-next-order-world-map", "digimon-world-next-order-card-collection", "digimon-world-next-order-digimon"]
    image.forEach(imgs => {
        baixarImagem("https://www.grindosaur.com/img/media/"+ imgs +".jpg")
    })
}

function main(){
    document.querySelector("#btnOverview").addEventListener("click",teste);
    document.querySelector("#btnImage").addEventListener("click",testeImagem);
}

window.onload = main 
