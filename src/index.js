
import {
  Datum,
  TimeSeries
} from "./Data.js";
import {
  Sensor,
  Temperature
  } from "./Sensor.js";
export const version = () => '1.0.0';

/* TODO : Créer le modèle objet ici */

// Création d'un objet Temperature avec des valeurs initiales
const temperature1 = new Temperature("T1", "Capteur de température 1", 45, "Fahrenheit");

// Définition d'un tableau de valeurs et de labels pour une série temporelle
const timeSeriesValues = [23, 23, 22, 21, 23, 23, 23, 25, 25, 40, 40];
const timeSeriesLabels = ['23', '23', '22', '21', '23', '23', '23', '25', '25', '40', '40'];

// Création d'un objet TimeSeries à partir des tableaux de valeurs et de labels
const timeSeries = new TimeSeries(timeSeriesValues, timeSeriesLabels);

// Ajout d'une valeur et d'un label supplémentaires à la série temporelle
timeSeries.ajouter(14, '14');

// Création d'un objet Datum avec une valeur initiale
const datum = new Datum(43);

// Affichage de la liste des valeurs et des labels de la série temporelle
console.log(timeSeries.values);
console.log(timeSeries.labels);

// Affichage de l'unité de mesure du capteur de température
console.log(temperature1.getUniteMesure());
