import LocationTypes from '../Enums/LocationTypes';
import BuildingModel from "./BuildingModel";
import { isObject } from "util";

export default class RoomModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.name = null;
    this.type = LocationTypes.ROOM;
    this.building = null;
    this.location_id = null;
    this.building_id = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('name')) this.name = data.name;
    if(data.hasOwnProperty('building')) {
      //Set roles.
      this.building = data.building;
      if(!(this.building instanceof BuildingModel)) 
      {
        if(!isObject(this.building)) {
          this.building = JSON.parse(this.building);
        }
        this.building = new BuildingModel(this.building);
      }
    }
    if(data.hasOwnProperty('location_id')) this.location_id = parseInt(data.location_id);
    if(data.hasOwnProperty('building_id')) this.building_id = parseInt(data.building_id);
  }

  toReadable() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      building: (this.building != null)? this.building.toReadable() : null
    };
  }

}