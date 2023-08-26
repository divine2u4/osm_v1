
var map = L.map('map', {
  center: [22.604964, 120.300476],
  zoom: 16
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([22.604964, 120.300476]).addTo(map)
  .bindPopup('<h1>高雄軟體園區</h1>')
  .openPopup();