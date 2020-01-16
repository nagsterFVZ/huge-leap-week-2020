export default class PermissionModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.name = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('name')) this.name = data.name;
  }

  toReadable() {
    return {
      id: this.id,
      name: this.name
    };
  }

}