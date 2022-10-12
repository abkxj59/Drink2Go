const mapImg = document.querySelector('.map__nojs')
const mapJs = document.querySelector('.map__js')

mapImg.hidden = true;
mapJs.hidden = false;

const map = L.map('map')
  .on('load', () => {
  })
  .setView({
    lat: 59.96838,
    lng: 30.31740,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mapPin = L.icon({
  iconUrl: '../../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mapPin,
  }
);

marker.addTo(map);
