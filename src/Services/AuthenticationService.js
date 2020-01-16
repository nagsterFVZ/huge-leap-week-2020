import { POST } from '../Services/RESTService';

export default class UserSerivce {

  login(email, password) {
    return POST('/authentication/login', {email: email, password: password});
  }

}