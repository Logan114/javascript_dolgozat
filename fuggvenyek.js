const felsorolas = document.getElementById("felsorolas")
export function tartalomkiiras(lista){
    let txt = `<ul>`
    let kepek = `<div class="kepek">`
    for (let index = 0; index<lista.length; index++){
        txt += `<p> ${lista[index].fajta}:</p> <li>${lista[index].ar[0]} - ${lista[index].ar[1]} Ft</li> <li>${lista[index].atlagsuly}Kg</li>`
        kepek += `<img src="${lista[index].kep}" alt="" onmouseover="nagyitas" div class = "kep${index}">`
    }
    txt += `</ul>`
    kepek += `</div>`
    felsorolas.innerHTML += txt
    felsorolas.innerHTML += kepek
}
