import { GET } from '../Services/RESTService';

export default class UserSerivce {

  getMe() {
    return GET('/users/me');
  }

}