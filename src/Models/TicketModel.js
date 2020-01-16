import EventModel from '../Models/EventModel';
import { isObject } from "util";

export default class TicketModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.uuid = null;
    this.event_id = null;
    this.event = null;
    this.email = null;
    this.timestamp = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('uuid')) this.uuid = data.uuid;
    if(data.hasOwnProperty('event_id')) this.event_id = parseInt(data.event_id);
    if(data.hasOwnProperty('event')) 
    {
      //Set event.
      this.event = data.event;

      //If not null.
      if(this.event != null)
      {
        if(!isObject(this.event)) {
          this.event = JSON.parse(this.event);
        }

        //Set location to correct model type.
        this.event = new EventModel(this.event);
      }
    }
    if(data.hasOwnProperty('email')) this.email = data.email;
    if(data.hasOwnProperty('timestamp')) this.timestamp = data.timestamp;
  }

  toReadable() {
    return {
      id: this.id,
      uuid: this.uuid,
      event: this.event,
      email: this.email,
      timestamp: this.timestamp
    };
  }

}