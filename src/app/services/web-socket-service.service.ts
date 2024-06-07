import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client, Message } from '@stomp/stompjs';
import * as Stomp from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private client: Client;
  private subject: Subject<string>;

  constructor() {
    this.client = new Stomp.Client({
      brokerURL: 'ws://localhost:8082/ws',
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    this.subject = new Subject<string>();

    this.client.onConnect = () => {
      this.client.subscribe('/topic/statistics', (message: Message) => {
        this.subject.next(message.body);
      });
    };

    this.client.activate();
  }

  getMessages(): Observable<string> {
    return this.subject.asObservable();
  }

  sendMessage(message: string): void {
    this.client.publish({ destination: '/app/update', body: message });
  }
}