var expect = require('chai').expect,
  geojsonAllRings = require('../index.js');
describe('get all rings of ', function() {
  it('Polygon with Hole', function() {
    var poly = {"type": "Polygon", 
      "coordinates": [
        [[35, 10], [45, 45], [15, 40], [10, 20], [35, 10]], 
        [[20, 30], [35, 35], [30, 20], [20, 30]]
      ]};
    var rings = geojsonAllRings(poly);
    expect(rings.length).to.equal(2);
    expect(rings).to.deep.equal([
      [[35, 10], [45, 45], [15, 40], [10, 20], [35, 10]],
      [[20, 30], [35, 35], [30, 20], [20, 30]]]);
  });
  it ('MultiPolygon' , function() {
    var poly = {"type": "MultiPolygon", "coordinates": [
      [
        [[40, 40], [20, 45], [45, 30], [40, 40]]
      ], 
      [
        [[20, 35], [10, 30], [10, 10], [30, 5], [45, 20], [20, 35]], 
         [[30, 20], [20, 15], [20, 25], [30, 20]]
      ]
    ]};
    var rings = geojsonAllRings(poly);
    expect(rings.length).to.equal(3);
    expect(rings).to.deep.equal([
      [[40, 40], [20, 45], [45, 30], [40, 40]],
      [[20, 35], [10, 30], [10, 10], [30, 5], [45, 20], [20, 35]],
      [[30, 20], [20, 15], [20, 25], [30, 20]]
    ]);
  });
});
