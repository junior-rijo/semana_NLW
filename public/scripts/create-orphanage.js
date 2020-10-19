const map = L.map("mapid").setView([23.6699013,-46.7381793, 16.06], 16);

//create and add tilelayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSite: [58, 68],
  iconAnchor: [29, 68],
});

let marker; //inicia a variavel vazia

//create and marker
map.on("click", function (event) {
  // a todo clique do mouse entra essa função.
  const lat = event.latlng.lat; //coletando dados
  const lng = event.latlng.lng; //coletando dados

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon - deixando apenas um icone
  marker && map.removeLayer(marker); //remover o layer caso o mesmo exista
  // add icon layer - dando valor a variavel
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adcionar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos  #images.
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image.
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //relizar o clone da ultima imagem adicionada.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true); //para achar a posição correta do array]
  //verificar se o campo esta vazio, se sim, não adcionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return; //sempre que uma função encontra um return ela para
  } //limpar o campo antes de adcionar ao container de imagens
  input.value = "";

  //adcionar o clone ao HTML
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o valor do campo
  span.parentNode.remove();
}

//selecionar sim ou não

function toggleSelect(event) {
  //pergar o botão clicado
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  //colocar a class .active nesse botao clicado

  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se sim ou não
  input.value = button.dataset.value;
  //atualizar o meu input hidden
}
