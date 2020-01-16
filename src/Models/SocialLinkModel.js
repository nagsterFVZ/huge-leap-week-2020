//Enums
import SocialLinkTypes from '../Enums/SocialLinkTypes';

export default class SocialLinkModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.type = null;
    this.url = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('type')) this.type = SocialLinkTypes.hasOwnProperty(data.type)? data.type : null;
    if(data.hasOwnProperty('url')) this.url = data.url;
  }

  toReadable() {
    return {
      id: this.id,
      type: this.type,
      url: this.url
    };
  }

}