import SocialLinkModel from '../Models/SocialLinkModel';

export default class CompanyModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.name = null;
    this.logo_id = null;
    this.logo = null;
    this.url = null;
    this.social_links = [];
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = parseInt(data.id);
    if(data.hasOwnProperty('name')) this.name = data.name;
    if(data.hasOwnProperty('logo_id')) this.logo_id = parseInt(data.logo_id);
    if(data.hasOwnProperty('logo')) this.logo = data.logo;
    if(data.hasOwnProperty('url')) this.url = data.url;
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
      name: this.name,
      logo: this.logo,
      url: this.url,
      social_links: this.social_links
    };
  }

}