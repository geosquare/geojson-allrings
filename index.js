//index.js
(function() {
  function allrings(polygon) {
    var rings;
    if(polygon.type && polygon.coordinates) {
      if (polygon.type === 'Polygon') {
        rings = polygon.coordinates;
      } else if (polygon.type === 'MultiPolygon') {
        rings = polygon.coordinates.reduce(function(prev,cur) {
          return prev.concat(cur);
        },[]);
      }
    }
    return rings;
  }
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = allrings;
  } else if (window) {
    window.geojsonAllRings = allrings;
  }
})();
