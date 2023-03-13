import {
  Sensor,
  Temperature
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
describe('Temperature', () => {
  describe('constructor', () => {
    test('should create a temperature sensor object with the correct values when provided', () => {
      const temperatureData = new Datum(20);
      const temperatureSensor = new Temperature('1', 'sensor 1', 'TEMPERATURE', temperatureData, 'C');
      expect(temperatureSensor.getId()).toEqual('1');
      expect(temperatureSensor.getName()).toEqual('sensor 1');
      expect(temperatureSensor.getData()).toEqual(temperatureData);
      expect(temperatureSensor.getUniteMesure()).toEqual('C');
    });

    test('should create a temperature sensor object with default values when not provided', () => {
      const temperatureSensor = new Temperature();
      expect(temperatureSensor.getId()).toEqual('');
      expect(temperatureSensor.getName()).toEqual('');
      expect(temperatureSensor.getData()).toEqual(null);
      expect(temperatureSensor.getUniteMesure()).toEqual('C');
    });

    test('should create a temperature sensor object with default unit when an invalid unit is provided', () => {
      const temperatureData = new Datum(20);
      const temperatureSensor = new Temperature('1', 'sensor 1', 'TEMPERATURE', temperatureData, 'invalidUnit');
      expect(temperatureSensor.getId()).toEqual('1');
      expect(temperatureSensor.getName()).toEqual('sensor 1');
      expect(temperatureSensor.getData()).toEqual(temperatureData);
      expect(temperatureSensor.getUniteMesure()).toEqual('C');
    });
  });

  describe('setUniteMesure', () => {
    test('should set the unit of measurement to the correct value when provided', () => {
      const temperatureSensor = new Temperature('1', 'sensor 1', 'TEMPERATURE', new Datum(20), 'C');
      temperatureSensor.setUniteMesure('F');
      expect(temperatureSensor.getUniteMesure()).toEqual('F');
    });

    test('should not set the unit of measurement when an invalid unit is provided', () => {
      const temperatureSensor = new Temperature('1', 'sensor 1', 'TEMPERATURE', new Datum(20), 'C');
      temperatureSensor.setUniteMesure('invalidUnit');
      expect(temperatureSensor.getUniteMesure()).toEqual('C');
    });
  });

  describe('convertisseurC', () => {
    test('should convert the temperature from Fahrenheit to Celsius when the unit is Fahrenheit', () => {
      const temperatureData = new Datum(68);
      const temperatureSensor = new Temperature('1', 'sensor 1', 'TEMPERATURE', temperatureData, 'F');
      expect(temperatureSensor.convertisseurC()).toBeCloseTo(20, 2);
    });

    test('should return the temperature value in Celsius when the unit is Celsius', () => {
      const temperatureData = new Datum(20);
      const temperatureSensor = new Temperature('1', 'sensor 1', 'TEMPERATURE', temperatureData, 'C');
      expect(temperatureSensor.convertisseurC()).toEqual(20);
    });
  });

  describe('convertisseurF', () => {
    test('should return the temperature value in Fahrenheit when the unit is Fahrenheit', () => {
      const temperatureData = new Datum(68);
      const temperatureSensor = new Temperature('1','sensor 1', 'TEMPERATURE', temperatureData, 'F');
      expect(temperatureSensor.convertisseurF()).toEqual(68);
      });
      test('should convert the temperature from Celsius to Fahrenheit when the unit is Celsius', () => {
        const temperatureData = new Datum(20);
        const temperatureSensor = new Temperature('1', 'sensor 1', 'TEMPERATURE', temperatureData, 'C');
        expect(temperatureSensor.convertisseurF()).toBeCloseTo(68, 2);
      });
  });
});


