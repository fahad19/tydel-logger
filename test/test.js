/* global describe, it */
var expect = require('chai').expect;
var Tydel = require('tydel');

var tydelLogger = require('../index');

describe('test', function () {
  it('creates model with initializer', function () {
    const Person = Tydel.createModel({
      name: Tydel.Types.string
    }, {
      setName: function (name) {
        this.name = name;
      }
    }, [
      tydelLogger
    ]);

    const person = new Person({ name: 'Fahad' });
    expect(Tydel.isModel(person)).to.eql(true);

    person.setName('Fahad [updated]');
    expect(person.name).to.eql('Fahad [updated]');
  });
});
