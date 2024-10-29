// Configura la mappa
let config = {
    crs: L.CRS.Simple,
    center: [0, 0],
    zoom: 5,
};

const map = L.map("map", config);

// Crea un layer di tile personalizzato
L.TileLayer.CustomTiles = L.TileLayer.extend({
    getTileUrl: function (coords) {
        return `/tiles/${coords.z}/${coords.x}/${coords.y}`; // URL per i tile
    },
    getAttribution: function () {
        return "<a target='_blank' href='https://loremflickr.com'>loremflickr</a>";
    },
});

L.tileLayer.customTiles = function () {
    return new L.TileLayer.CustomTiles();
};

// Aggiungi il layer di tile alla mappa
L.tileLayer.customTiles().addTo(map);