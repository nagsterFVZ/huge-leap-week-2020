import { POST } from '../Services/RESTService';

export default class TicketSerivce {

  createTicket(uMail, eID) {
    return POST('/tickets', {email: uMail, event_id: eID});
  }

}