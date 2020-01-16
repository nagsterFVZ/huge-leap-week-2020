import FileTypes from '../Enums/FileTypes';

export default class AssetModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.user_id = null;
    this.name = null;
    this.path = null;
    this.extension = null;
    this.type = null;
    this.timestamp = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('user_id')) this.user_id = parseInt(data.user_id);
    if(data.hasOwnProperty('name')) this.name = data.name;
    if(data.hasOwnProperty('path')) this.path = data.path;
    if(data.hasOwnProperty('extension')) this.extension = data.extension;
    if(data.hasOwnProperty('type')) this.type = FileTypes.hasOwnProperty(data.type)? data.type : null;
    if(data.hasOwnProperty('timestamp')) this.timestamp = data.timestamp;
  }

  toReadable() {
    return {
      id: this.id,
      user_id: this.user_id,
      name: this.name,
      path: this.path,
      extension: this.extension,
      type: this.type,
      timestamp: this.timestamp
    };
  }

}