export class Data{
}
export class TimeSeries extends Data {
  #values;
  #labels;

  constructor(values, labels) {
    super();
    this.#values = values || [];
    this.#labels = labels || [];
  }

  get values() {
    return this.#values.slice();
  }

  get labels() {
    return this.#labels.slice();
  }

value(index) {
  if (this.#values.length > 0) {
    return this.#values.slice(index, index+1);
  } else {
    return [];
  }
}
  label(index) {
    if (this.#labels.length != 0) {
      return this.#labels.slice((index-1),index);
    } else {
      return [];
    }
  }

  ajouter(value, label) {
    if (typeof value === "number" && typeof label === "string" ) {
      this.#values.push(value);
      this.#labels.push(label);
    }
  }

  supprimerDernierElement() {
    if (this.#values.length>0 && this.#labels.length>0) {
      this.#values.pop();
      this.#labels.pop();
    }
  }

  supprimerPremierElement() {
    if (this.#values.length!=0 && this.#labels.length!=0) {
      this.#values.shift();
      this.#labels.shift();
    }
  }
}
export class Datum extends Data {
  #value=0;
  constructor(value){
    super();
    if (typeof value === 'number'){
      this.#value = value ;
     }
}

  setValue(value){
     if(typeof value === 'number') {
       this.#value = value;
     }
  }
   getValue(){
    return this.#value;
  }
}

