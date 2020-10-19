const options = {
    dragging: false,
    touchZoom:false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const map = L.map('mapid', options).setView([-23.6651132,-46.7347936,16.06], 16);

//create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);


//create icon 
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSite: [58, 68],
    iconAnchor:[29,68],
    popupAnchor: [170,2]
})

L.marker([-23.6651132,-46.7347936,16.06], {icon})
.addTo(map)


//image galery

function selectImage (event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")//<-pesquise todos os seletores que coloquei
    buttons.forEach(removeActiveClass)

    function removeActiveClass (button) {
        button.classList.remove("active")
    }
    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container da imagem clicada
    imageContainer.src = image.src

    //adcionar a classe active para este botão
    button.classList.add('active')
}
