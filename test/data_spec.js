var assert = require('chai').assert;
var expect = require('chai').expect;
const dataExports = require('./../data.js')

describe('Data', function() {
  let data = new dataExports.Data();

  describe('#write()', function() {
    it('write this.data', function() {
      data.write('key', 'value');
      expect(data.data['key']).equal( 'value' );
    });
  });

  describe('#write()', function() {
    it('write this.data', function() {
      data.write('key', 'value');
      expect(data.read('key')).equal( 'value' );
    });
  });

  describe('#set()', function() {
    it('store key and value arguments into this.data', function() {
      let params = {key: 'value'}
      data.set(params)
      expect(data.data['key']).equal( 'value' );
    });
  });

  describe('#get()', function() {
    it('store key and value arguments into this.data', function() {
      let params = {key: 'value'}
      data.set(params)
      let get_params = {key: 'key'}
      expect(data.get(get_params)).equal( 'value' );
    });
  });

});
