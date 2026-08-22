const map = new mapboxgl.Map({
        accessToken: mapToken,
        container: 'map', // container ID
        center: [77.2090, 28.6139], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });