import {Datum, TimeSeries} from "../src/Data.js";

export class Sensor{
  #id; // l'ID est privé, car il n'a besoin d'être accessible que depuis les méthodes de la classe Sensor
  #name; // le nom est privé pour la même raison que l'ID
  #data; // les données sont également privées, car elles ne doivent être accessibles que depuis les méthodes de la classe

  // Les types de capteurs sont définis dans une liste statique, qui ne changera jamais pour toutes les instances de Sensor
  static sensorTypes = [
    'TEMPERATURE',
    'HUMIDITY',
    'LIGHT'
  ];

  constructor(id , name, type, data) {
    // Vérifie si l'ID, le nom et le type sont des chaînes de caractères valides et si le type est valide pour créer une instance de Sensor
    if (typeof id === 'string' && typeof name === 'string' && Sensor.sensorTypes.includes(type)) {
      this.#id = id ;
      this.#name = name;
      this.#data =data;
    }else {
      // Si les paramètres ne sont pas valides, crée une instance de Sensor vide avec des valeurs par défaut
      this.#id = "";
      this.#name = "";
      this.#data = null;
    }
  }

  getId(){
    return this.#id;
  }
  getName(){
      return this.#name;
  }
   getData(){
    if (this.#data!==null) {
      return this.#data.valueOf(); // Retourne la valeur des données du capteur
    }else {
      return null;
    }
  }

  setId(id){
    if (typeof id === 'string') {
      this.#id = id ; // Modifie l'ID du capteur
    }
  }
  setName(name){
    if (typeof name === 'string') {
      this.#name =name; // Modifie le nom du capteur
    }
 }

  setData(data){
    if (typeof data === 'object') {
      this.#data=data; // Modifie les données du capteur
    }
  }

  toString() {
    if (this.#id!=="" && this.#name!=="" && this.#data!== null) {
      let str = this.#id + " " + this.#name + " " + this.#data.getValue(); // Retourne une chaîne de caractères représentant l'instance de Sensor
      return str;
    }else
      return "";
  }
}

