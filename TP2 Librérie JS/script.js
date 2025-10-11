var map = L.map('map').setView([47.73136040316766, 7.300665324228286], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([47.73156040316766, 7.300665324228286]).addTo(map);

var polygon = L.polygon([
    [47.7315604, 7.300665],
    [47.7311104, 7.302500],
    [47.72900, 7.301605],
    [47.72939, 7.299505]
]).addTo(map);

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Garçon', 'Fille'],
        datasets: [{
            label: 'Nb fille/garçon du tp ',
            data: [4, 4],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

marker.bindPopup('<div><canvas id="myChart"></canvas></div>');