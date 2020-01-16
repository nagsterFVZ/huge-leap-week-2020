export default class SessionModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.session_id = null;
    this.user_id = null;
    this.browser_id = null;
    this.timestamp = null;
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('session_id')) this.session_id = data.session_id;
    if(data.hasOwnProperty('user_id')) this.user_id = parseInt(data.user_id);
    if(data.hasOwnProperty('browser_id')) this.browser_id = data.browser_id;
    if(data.hasOwnProperty('timestamp')) this.timestamp = data.timestamp;
  }

  toReadable() {
    return {
      id: this.id,
      session_id: this.session_id,
      user_id: this.user_id,
      browser_id: this.browser_id,
      timestamp: this.timestamp
    };
  }

}