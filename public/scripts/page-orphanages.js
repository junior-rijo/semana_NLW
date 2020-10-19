//tipos de dados
//String ""
//Numeros 01
//Object {}
//Booleans True or False
//Array {}

const map = L.map('mapid').setView([-23.6651132,-46.7347936,16.06], 16);

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

//

function addMarker({id, name, lat, lng})
{

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="./images/arrow-white.svg"</a>`)
    
    L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})