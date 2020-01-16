import LocationTypes from '../Enums/LocationTypes';

export default class BuildingModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.name = null;
    this.type = LocationTypes.BUILDING;
    this.address = null;
    this.postal_code = null;
    this.city = null;
    this.location_id = null;
    this.latitude = null;
    this.longitude = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('name')) this.name = data.name;
    if(data.hasOwnProperty('address')) this.address = data.address;
    if(data.hasOwnProperty('postal_code')) this.postal_code = data.postal_code;
    if(data.hasOwnProperty('city')) this.city = data.city;
    if(data.hasOwnProperty('location_id')) this.location_id = parseInt(data.location_id);
    if(data.hasOwnProperty('latitude')) this.latitude = parseFloat(data.latitude);
    if(data.hasOwnProperty('longitude')) this.longitude = parseFloat(data.longitude);
  }

  toReadable() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      address: this.address,
      postal_code: this.postal_code,
      city: this.city,
      latitude: this.latitude,
      longitude: this.longitude
    };
  }

}