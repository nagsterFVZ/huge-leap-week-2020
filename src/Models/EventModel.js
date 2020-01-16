import SpeakerModel from '../Models/SpeakerModel';
import LocationModel from '../Models/LocationModel';
import BuildingModel from '../Models/BuildingModel';
import RoomModel from '../Models/RoomModel';
import CompanyModel from '../Models/CompanyModel';
import { isObject } from "util";

//Enums
import EventTypes from '../Enums/EventTypes';
import LocationTypes from '../Enums/LocationTypes';

export default class EventModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.name = null;
    this.description = null;
    this.picture_id = null;
    this.picture = null;
    this.location_id = null;
    this.location = null;
    this.start_timestamp = null;
    this.end_timestamp = null;
    this.type = null;
    this.companies = [];
    this.speakers = [];
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = (data.id == null)? null : parseInt(data.id);
    if(data.hasOwnProperty('name')) this.name = data.name;
    if(data.hasOwnProperty('description')) this.description = data.description;
    if(data.hasOwnProperty('picture_id')) this.picture_id = parseInt(data.picture_id);
    if(data.hasOwnProperty('picture')) this.picture = data.picture;
    if(data.hasOwnProperty('location_id')) this.location_id = parseInt(data.location_id);
    if(data.hasOwnProperty('location')) 
    {
      //Set location.
      this.location = data.location;

      //If not null.
      if(this.location != null)
      {
        if(!isObject(this.location)) {
          this.location = JSON.parse(this.location);
        }

        //Set location to correct model type.
        switch(new LocationModel(this.location).type)
        {
          case LocationTypes.ROOM:
            this.location = new RoomModel(this.location);
            break;
          case LocationTypes.BUILDING:
              this.location = new BuildingModel(this.location);
            break;
          default:
              this.location = null;
            break;
        }
      }
    }
    if(data.hasOwnProperty('start_timestamp')) this.start_timestamp = data.start_timestamp;
    if(data.hasOwnProperty('end_timestamp')) this.end_timestamp = data.end_timestamp;
    if(data.hasOwnProperty('type')) this.type = EventTypes.hasOwnProperty(data.type)? data.type : null;
    if(data.hasOwnProperty('companies')) {
      //Set companies.
      this.companies = data.companies;
      //If companies not null and not an array, convert to array.
      if(this.companies != null && !Array.isArray(this.companies)) {
        this.companies = JSON.parse(this.companies);
      }
      //If companies is null, convert companies to empty array.
      if(this.companies == null) {
        this.companies = [];
      } else {
        for(let i = 0; i < this.companies.length; i++) {
          this.companies[i] = new CompanyModel(this.companies[i]);
        }
      }
    }
    if(data.hasOwnProperty('speakers')) {
      //Set speakers.
      this.speakers = data.speakers;
      //If speakers not null and not an array, convert to array.
      if(this.speakers != null && !Array.isArray(this.speakers)) {
        this.speakers = JSON.parse(this.speakers);
      }
      //If speakers is null, convert speakers to empty array.
      if(this.speakers == null) {
        this.speakers = [];
      } else {
        for(let i = 0; i < this.speakers.length; i++) {
          this.speakers[i] = new SpeakerModel(this.speakers[i]);
        }
      }
    }
  }

  toReadable() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      picture: this.picture,
      location: this.location,
      start_timestamp: this.start_timestamp,
      end_timestamp: this.end_timestamp,
      type: this.type,
      companies: this.companies,
      speakers: this.speakers
    };
  }

}