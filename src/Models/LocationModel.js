import LocationTypes from '../Enums/LocationTypes';

export default class LocationModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.name = null;
    this.type = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('name')) this.name = data.name;
    if(data.hasOwnProperty('type')) this.type = LocationTypes.hasOwnProperty(data.type)? data.type : null;
  }

  toReadable() {
    return {
      id: this.id,
      name: this.name,
      type: this.type
    };
  }

}