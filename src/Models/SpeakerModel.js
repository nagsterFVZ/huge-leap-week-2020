import SocialLinkModel from '../Models/SocialLinkModel';
import CompanyModel from '../Models/CompanyModel';

export default class SpeakerModel {

  constructor(data) {
    //Create fields.
    this.id = null;
    this.firstname = null;
    this.lastname = null;
    this.picture = null;
    this.picture_id = null;
    this.job_title = null;
    this.description = null;
    this.companies = [];
    this.social_links = [];
    //Update fields.
    this.update(data);
  }

  update(data) {
    if(data == null) return;
    if(data.hasOwnProperty('id')) this.id = (data.id == null)? null : parseInt(data.id);
    if(data.hasOwnProperty('firstname')) this.firstname = data.firstname;
    if(data.hasOwnProperty('lastname')) this.lastname = data.lastname;
    if(data.hasOwnProperty('picture')) this.picture = data.picture;
    if(data.hasOwnProperty('picture_id')) this.picture_id = parseInt(data.picture_id);
    if(data.hasOwnProperty('job_title')) this.job_title = data.job_title;
    if(data.hasOwnProperty('description')) this.description = data.description;
    if(data.hasOwnProperty('companies')) {
      //Set companies.
      this.companies = data.companies;
      //If companies not null and not an array, convert to array.
      if(this.companies != null && !Array.isArray(this.companies)) {
        this.companies = JSON.parse(this.companies);
      }
      //If social_links is null, convert social_links to empty array.
      if(this.companies == null) {
        this.companies = [];
      } else {
        for(let i = 0; i < this.companies.length; i++) {
          this.companies[i] = new CompanyModel(this.companies[i]);
        }
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
      picture: this.picture,
      job_title: this.job_title,
      description: this.description,
      companies: this.companies,
      social_links: this.social_links
    };
  }

}