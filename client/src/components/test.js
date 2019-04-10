var request = require('supertest');
var assert = require('chai')
describe('starting express server', function () {
  var server;

  beforeEach(function () {
    server = require('../../../server/index.js');
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });

  it('should respond with 404 if there is an error', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });

  it('responds to /api/restaurants with all 100 restaurants', function() {
    request(server)
      .get('/api/restaurants')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '100', done);
  });

  it ('responds to /api/restaurants/1 with data for restaurant 1', function() {
    request(server)
      .get('api/restaurants/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '1')
      .then(response => {
        assert(response.body.name, 'Pollich LLC')
      }, done);
  });
});
