const busStops = [
    [ 77.10311046995747,11.021114869833047],
    [ 77.10924736375773,11.024569005014998],
    [ 77.12001911441412,11.02499023823763],
    [ 77.1246968866115,11.02595907235986],
    [  77.12963215085647,11.028823432832963],
    [ 77.13289429991237 ,11.02703161898172]
  ];
  
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
  
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.11486927330805,11.028865555624154],
    zoom: 14,
  });
  
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker= new mapboxgl.Marker()
              .setLngLat([ 77.10311046995747,11.021114869833047])
              .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(()=> {
      if (counter>=busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
      },1000);
  }
  
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }