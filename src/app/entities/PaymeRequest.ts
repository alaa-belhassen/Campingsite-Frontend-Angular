export class PaymeRequest {
  amount: number;
  note: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  return_url: string;
  cancel_url: string;
  webhook_url: string;
  order_id: string;

  constructor(
     amount: number,
     note: string,
     first_name: string,
     last_name: string,
     email: string,
     phone: string,
     return_url: string,
     cancel_url: string,
     webhook_url: string,
     order_id: string
  ) {
    this.amount = amount;
    this.note = note;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.return_url = return_url;
    this.cancel_url = cancel_url;
    this.webhook_url = webhook_url;
    this.order_id = order_id;
  }
}