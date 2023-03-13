import {
  Sensor
} from './Sensor.js';

import {
  TimeSeries,
  Datum,
} from './Data.js';

describe('Sensor Tests', () => {
  describe('Sensor constructor test and getters', () => {
    test('Test constructor', () => {
      let temp = new Datum(43);
      let sensor1 = new Sensor('1', 'Temperature Sensor', 'TEMPERATURE', temp);
      expect(sensor1.getId()).toEqual('1');
      expect(sensor1.getName()).toEqual('Temperature Sensor');
      expect(sensor1.getData()).toEqual(temp);
    });
    test('Test constructor without value', () => {
      let sensor1 = new Sensor();
      expect(sensor1.getId()).toEqual('');
      expect(sensor1.getName()).toEqual('');
      expect(sensor1.getData()).toEqual(null);
    });
    test('Test constructor with incorrect types', () => {
      let temp = new Datum(43);
      let sensor1 = new Sensor(1, 'Temperature Sensor', 'TEMPERATURE', temp);
      expect(sensor1.getId()).toEqual('');
      expect(sensor1.getName()).toEqual('');
      expect(sensor1.getData()).toEqual(null);
    });
  });

  describe('Test setId()', () => {
    test('Test setId with correct value', () => {
      let temp = new Datum(43);
      let sensor1 = new Sensor('1', 'Temperature Sensor', 'TEMPERATURE', temp);
      sensor1.setId('3');
      expect(sensor1.getId()).toEqual('3');
    });
    test('Test setId with incorrect value', () => {
      let temp = new Datum(43);
      let sensor1 = new Sensor('1', 'Temperature Sensor', 'TEMPERATURE', temp);
      sensor1.setId(3);
      expect(sensor1.getId()).toEqual('1');
    });
    test('Test setId with value in an empty object', () => {
      let sensor1 = new Sensor();
      sensor1.setId('3');
      expect(sensor1.getId()).toEqual('3');
    });
  });

  describe('Test setName()', () => {
    test('Test setName with correct value', () => {
      let temp = new Datum(43);
      let sensor1 = new Sensor('1', 'Temperature Sensor', 'TEMPERATURE', temp);
      sensor1.setName('Temperature Sensor 2');
      expect(sensor1.getName()).toEqual('Temperature Sensor 2');
    });
    test('Test setName with incorrect value', () => {
      let temp = new Datum(43);
      let sensor1 = new Sensor('1', 'Temperature Sensor', 'TEMPERATURE', temp);
      sensor1.setName(45);
      expect(sensor1.getName()).toEqual('Temperature Sensor');
    });
    test('Test setName with value in an empty object', () => {
      let sensor1 = new Sensor();
      sensor1.setName('Temperature Sensor');
      expect(sensor1.getName()).toEqual('Temperature Sensor');
    });
  });

  describe('Test setData()', () => {
    test('Test setData with correct value', () => {
      let temp1 = new Datum(43);
      let temp2 = new Datum(55);
      let sensor1 = new Sensor('1', 'Temperature Sensor', 'TEMPERATURE', temp1);
      sensor1.setData(temp2);
      expect(sensor1.getData()).toEqual(temp2);
    });
    test('Test setData with incorrect value', () => {
      let temp1 = new Datum(43);
      let temp2 = '4';
      let sensor1 = new Sensor('1', 'Temperature Sensor', 'TEMPERATURE', temp1);
      sensor1.setData(temp2);
      expect(sensor1.getData()).toEqual(temp1);
    });
    test('Test setData with value in an empty object', () => {
      let temp = new Datum(55);
      let sensor1 = new Sensor();
      sensor1.setData(temp);
      expect(sensor1.getData()).toEqual(temp);
    });
  });
  describe( 'Test toString()', () => {
    test('Test de la methode toString avec une valeur correcte', () => {
      let temp= new Datum(43);
      let sensor1 = new Sensor('1', 'name', 'TEMPERATURE', temp);
      expect(sensor1.toString()).toEqual("1 name 43" );

    });
    test('Test de la methode toString avec une valeur incorrecte', () => {
      let temp= new Datum(43);
      let sensor1 = new Sensor(1, 'name', 'TEMPERATURE', temp);
      expect(sensor1.toString()).toEqual("" );

    });
  });
});

