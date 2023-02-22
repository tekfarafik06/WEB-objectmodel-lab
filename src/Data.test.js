import {
  TimeSeries,
  Datum,
} from './Data.js';
describe('Data test', () => {
  describe('TimeSeries test', () => {
    let dataObjet = new TimeSeries([23, 23, 22, 21, 23, 23, 23, 25, 25],
      ['23', '23', '22', '21', '23', '23', '23', '25', '25']);
    let dataObjetVide = new TimeSeries();
    describe('TEST initialisation d un objet a la création', () => {
      test('Test constructeur avec des values et labels  ', () => {
        let values = [23, 23];
        let labels = ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z"];

        let time = new TimeSeries(values, labels);
        expect(time.labels).toEqual(labels);
        expect(time.values).toEqual(values);
      });
      test('Test constructeur sans valeurs', () => {
        let values = [];
        let labels = [];

        let time1 = new TimeSeries();
        expect(time1.values).toEqual(values);
        expect(time1.labels).toEqual(labels);
      });
    });
    describe('TEST de la methode value()', () => {
      test('Recuperation d une valeur a un indice precise',()=>{
        let valeur = [21];
        expect(dataObjet.value(3)).toEqual(valeur);
      });
      test('Recuperation d une valeur avec un indice donne dans un objet vide', () => {
        let valeur=[];
        expect(dataObjetVide.value(4)).toEqual(valeur);
      });
    });
    describe('TEST de la methode label()', () => {
      test('Recuperation d un label', () => {
        let value=['21'];
        expect(dataObjet.label(4)).toEqual(value);
      });
      test('Recuperation d un label', () => {
        let valeur=[];
        expect(dataObjetVide.label(4)).toEqual(valeur);
      });
    });

    describe('TEST de la methode ajouter()', () => {
      test('Ajouter dans un objet vide', () => {
        let valeur =23;
        let label = '23';
        let dataObjetVide1 = new TimeSeries();
        dataObjetVide1.ajouter(valeur,label);
        expect(dataObjetVide1.labels).toEqual([label]);
        expect(dataObjetVide1.values).toEqual([valeur]);
      });
      test('Ajouter dans un objet non vide', () => {
        let valeurResultat =[23, 23, 22, 21, 23, 23, 23, 25, 25,21];
        let labelResultat =['23', '23', '22', '21', '23', '23', '23', '25', '25','21'] ;
        let dataObjet1 = new TimeSeries([23, 23, 22, 21, 23, 23, 23, 25, 25],
          ['23', '23', '22', '21', '23', '23', '23', '25', '25']);
        dataObjet1.ajouter(21,'21');
        expect(dataObjet1.values).toEqual(valeurResultat);
        expect(dataObjet1.labels).toEqual(labelResultat);
      });
    });
    describe('TEST de la methode supprimerDernierElement()', () => {
      test('Supprimer dans un objet vide', () => {
              let valeurResultat =[];
              let labelResultat =[] ;
              let dataObjetS = new TimeSeries();
              dataObjetS.supprimerDernierElement();
              expect(dataObjetS.values).toEqual(valeurResultat);
              expect(dataObjetS.labels).toEqual(labelResultat);
            });
          });
      test('Supprimer dans un objet non vide', () => {
        let valeurResultat =[23, 23, 22, 21, 23, 23, 23, 25];
        let labelResultat =['23', '23', '22', '21', '23', '23', '23', '25'] ;
        let dataObjetS = new TimeSeries([23, 23, 22, 21, 23, 23, 23, 25, 25],
          ['23', '23', '22', '21', '23', '23', '23', '25', '25']);
        dataObjetS.supprimerDernierElement();
        expect(dataObjetS.values).toEqual(valeurResultat);
        expect(dataObjetS.labels).toEqual(labelResultat);
      });

    describe('TEST de la methode supprimerPremierElement()', () => {
      test('Supprimer dans un objet non vide', () => {
        let valeurResultat =[23, 22, 21, 23, 23, 23, 25,25];
        let labelResultat =['23', '22', '21', '23', '23', '23', '25', '25'] ;
        let dataObjetS = new TimeSeries([23, 23, 22, 21, 23, 23, 23, 25,25],
          ['23', '23', '22', '21', '23', '23', '23', '25', '25']);
        dataObjetS.supprimerPremierElement();
        expect(dataObjetS.values).toEqual(valeurResultat);
        expect(dataObjetS.labels).toEqual(labelResultat);
      });
      test('Supprimer dans un objet vide', () => {
        let valeurResultat =[];
        let labelResultat =[] ;
        let dataObjetS = new TimeSeries();
        dataObjetS.supprimerPremierElement();
        expect(dataObjetS.values).toEqual(valeurResultat);
        expect(dataObjetS.labels).toEqual(labelResultat);
      });
    });
  });
describe('Datum test', () => {
    let dataObjet = new Datum([23, 23, 22, 21, 23, 23, 23, 25, 25]);
    let dataObjetVide ;
    describe('TEST constructeur', () => {
      test('Test de constructeur avec une valeur', () => {
        let values = 23;
        let data = new Datum(values);
        expect(data.getValue()).toEqual(values);
      });
      test('Test de constructeur sans valeur', () => {
         dataObjetVide = new Datum();
        expect(dataObjetVide.getValue()).toEqual(0);
      });
      test('Test du constructeur avec valeur incorrecte', () => {
        let values = "23";
        let data = new Datum(values);
        expect(data.getValue()).toEqual(0);
      });
    });
    describe('TEST de la methode getValue()', () => {
      test('Datum: get()', () => {
        let value = 23;
        let data = new Datum(23)
        expect(data.getValue()).toEqual(value);
        });
    });
    describe('TEST de la methode setValue()', () => {
      test('TEST de la methode setValue() avec une valeur correcte', () => {
        let value = 24;
        let data = new Datum(23);
        data.setValue(value);
        expect(data.getValue()).toEqual(value);
      });
      test('TEST de la methode setValue() avec une valeur incorrecte ', () => {
        let value = '4';
        let data = new Datum(23);
        data.setValue(value);
        expect(data.getValue()).toEqual(23);
      });
    });
  });
});
