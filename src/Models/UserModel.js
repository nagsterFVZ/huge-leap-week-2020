import SocialLinkModel from '../Models/SocialLinkModel';

export default class UserModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.firstname = null;
    this.lastname = null;
    this.email = null;
    this.password = null;
    this.picture = null;
    this.picture_id = null;
    this.created = null;
    this.roles = [];
    this.social_links = [];
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = (data.id == null)? null : parseInt(data.id);
    if(data.hasOwnProperty('firstname')) this.firstname = data.firstname;
    if(data.hasOwnProperty('lastname')) this.lastname = data.lastname;
    if(data.hasOwnProperty('email')) this.email = data.email;
    if(data.hasOwnProperty('password')) this.password = data.password;
    if(data.hasOwnProperty('picture')) this.picture = data.picture;
    if(data.hasOwnProperty('picture_id')) this.picture_id = parseInt(data.picture_id);
    if(data.hasOwnProperty('created')) this.created = data.created;
    if(data.hasOwnProperty('roles')) {
      //Set roles.
      this.roles = data.roles;
      //If roles not null and not an array, convert to array.
      if(this.roles != null && !Array.isArray(this.roles)) {
        this.roles = JSON.parse(this.roles);
      }
      //If roles is null, convert roles to empty array.
      if(this.roles == null) {
        this.roles = [];
      }
    }
    if(data.hasOwnProperty('social_links')) {
      //Set social_links.
      this.social_links = data.social_links;
      //If social_links not null and not an array, convert to array.
      if(this.social_links != null && !Array.isArray(this.social_links)) {
        this.social_links = JSON.parse(this.social_links);
      }
      //If social_links is null, convert social_links to empty array.
      if(this.social_links == null) {
        this.social_links = [];
      } else {
        for(let i = 0; i < this.social_links.length; i++) {
          this.social_links[i] = new SocialLinkModel(this.social_links[i]);
        }
      }
    }
  }

  toReadable() {
    return {
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      picture: this.picture,
      created: this.created,
      roles: this.roles,
      social_links: this.social_links
    };
  }

}