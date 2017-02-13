export class Map {
  id:             number;
  lang:           number;
  long:           number;
  fontsize:       number;
  fontcolor:      number;
  strokecolor:    number;
  strokeweight:   number;
  text: string =  ''; 

  constructor(values: Object = {}) {
	Object.assign(this, values);
  }
}
